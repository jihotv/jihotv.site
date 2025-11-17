'use client';

import { motion } from 'framer-motion';

interface TagNavigationProps {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

const TagNavigation = ({ tags, activeTag, setActiveTag }: TagNavigationProps) => {
  return (
    <nav className="tag-navigation my-8" role="navigation" aria-label="콘텐츠 필터">
      <div className="container mx-auto flex justify-center items-center gap-2 md:gap-4 flex-wrap">
        {tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`tag-button px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-colors
              ${activeTag === tag
                ? 'bg-deep-blue text-white'
                : 'bg-white text-gray-700 hover:bg-soft-blue/50'
              }`
            }
            aria-pressed={activeTag === tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default TagNavigation;
