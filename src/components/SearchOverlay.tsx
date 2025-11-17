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
      className="search-overlay fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="container mx-auto px-4 pt-20">
        <div className="relative max-w-2xl mx-auto">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요..."
            className="w-full p-4 text-lg bg-transparent border-b-2 border-white text-white focus:outline-none focus:border-soft-blue"
            autoFocus
          />
          <button
            onClick={onClose}
            className="absolute top-1/2 right-0 -translate-y-1/2 text-white hover:text-soft-blue p-4"
            aria-label="검색 닫기"
          >
            Close
          </button>
        </div>

        <div className="mt-8 max-w-2xl mx-auto">
          <AnimatePresence>
            {results.map(result => (
              <motion.div
                key={result.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Link href={`/posts/${result.slug}`} onClick={onClose} className="block p-4 my-2 bg-gray-800/50 rounded-lg hover:bg-gray-700">
                  <h4 className="font-bold text-white">{result.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{result.excerpt}</p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
