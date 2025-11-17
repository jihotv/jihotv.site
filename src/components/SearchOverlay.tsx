'use client';

import { useState, useMemo, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import debounce from 'lodash.debounce';

// This type should match the one in `posts.ts` but we redefine it here
// to keep the component self-contained for clarity.
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
};

interface SearchOverlayProps {
  allPosts: Post[];
  onClose: () => void;
}

export const SearchOverlay = ({ allPosts, onClose }: SearchOverlayProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Post[]>([]);

  const searchIndex = useMemo(() => {
    return allPosts.map(post => ({
      ...post,
      title: post.title.toLowerCase(),
      excerpt: post.excerpt.toLowerCase(),
    }));
  }, [allPosts]);

  const debouncedSearch = useCallback(
    debounce((searchQuery: string) => {
      if (searchQuery.length < 2) {
        setResults([]);
        return;
      }
      const lowerQuery = searchQuery.toLowerCase();
      const searchResults = searchIndex
        .filter(item =>
          item.title.includes(lowerQuery) ||
          item.excerpt.includes(lowerQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        )
        .slice(0, 10);
      setResults(searchResults);
    }, 300),
    [searchIndex] // Dependency array is now correct
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="search-overlay fixed inset-0 z-50 bg-white"
      role="dialog"
      aria-modal="true"
    >
      <div className="container max-w-4xl mx-auto px-6 pt-24 md:pt-32">
        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
            className="w-full py-4 text-2xl md:text-3xl bg-transparent border-b border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-smooth"
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute top-1/2 right-0 -translate-y-1/2 text-gray-400 hover:text-black transition-smooth text-sm uppercase tracking-wider"
            aria-label="검색 닫기"
          >
            닫기
          </button>
        </div>

        <div className="mt-12 space-y-6">
          <AnimatePresence>
            {results.map(result => (
              <motion.div
                key={result.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Link
                  href={`/posts/${result.slug}`}
                  onClick={onClose}
                  className="block py-6 border-b border-gray-200 hover:border-black transition-smooth group"
                >
                  <h4 className="font-bold text-xl md:text-2xl text-black group-hover:opacity-60 transition-smooth mb-2">
                    {result.title}
                  </h4>
                  <p className="text-gray-600 text-sm md:text-base line-clamp-2">{result.excerpt}</p>
                  <div className="mt-3 flex gap-2">
                    {result.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider text-gray-400">{tag}</span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          {query.length >= 2 && results.length === 0 && (
            <p className="text-gray-400 text-center py-12">검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};
