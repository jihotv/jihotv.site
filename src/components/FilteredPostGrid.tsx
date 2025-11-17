'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TagNavigation from "@/components/TagNavigation";
import ContentCard from "@/components/ContentCard";
import { PostData } from '@/lib/posts';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const POSTS_PER_PAGE = 6;

type Post = Omit<PostData, 'contentHtml' | 'prevPost' | 'nextPost'> & { [key: string]: any };

interface FilteredPostGridProps {
  allPosts: Post[];
}

export default function FilteredPostGrid({ allPosts }: FilteredPostGridProps) {
  const [activeTag, setActiveTag] = useState('전체');
  const [limit, setLimit] = useState(POSTS_PER_PAGE);

  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    allPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return ['전체', ...Array.from(tags)];
  }, [allPosts]);

  const filteredPosts = useMemo(() => {
    if (activeTag === '전체') {
      return allPosts;
    }
    return allPosts.filter(post => post.tags.includes(activeTag));
  }, [activeTag, allPosts]);

  const postsToShow = useMemo(() => {
    return filteredPosts.slice(0, limit);
  }, [filteredPosts, limit]);

  const hasMore = limit < filteredPosts.length;

  const loadMore = useCallback(() => {
    if (hasMore) {
      setLimit(prevLimit => prevLimit + POSTS_PER_PAGE);
    }
  }, [hasMore]);

  const lastElementRef = useInfiniteScroll({
    onLoadMore: loadMore,
    isLoading: false, // We don't have a true async loading state here
    hasMore,
  });

  return (
    <>
      <TagNavigation
        tags={uniqueTags}
        activeTag={activeTag}
        setActiveTag={(tag) => {
          setActiveTag(tag);
          setLimit(POSTS_PER_PAGE); // Reset limit when tag changes
        }}
      />
      <div className="container max-w-7xl mx-auto px-6 pb-16">
        <motion.main layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          <AnimatePresence>
            {postsToShow.map((post, index) => (
              <ContentCard
                key={`${post.slug}-${index}`} // Add index to key for re-rendering on tag change
                slug={`/posts/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                tags={post.tags}
                featured_image={post.featured_image}
              />
            ))}
          </AnimatePresence>
        </motion.main>
        <div ref={lastElementRef} className="h-8" />
      </div>
    </>
  );
}
