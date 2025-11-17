'use client';

import { useState, ReactNode } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import { SearchOverlay } from '@/components/SearchOverlay';
import { PostData } from '@/lib/posts';

type Post = Omit<PostData, 'contentHtml' | 'prevPost' | 'nextPost'> & { [key: string]: any };

interface SearchProviderProps {
  allPosts: Post[];
  children: ReactNode;
}

export default function SearchProvider({ allPosts, children }: SearchProviderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isSearchOpen && (
          <SearchOverlay allPosts={allPosts} onClose={() => setIsSearchOpen(false)} />
        )}
      </AnimatePresence>
      
      <Header onSearchOpen={() => setIsSearchOpen(true)} />
      {children}
    </>
  );
}
