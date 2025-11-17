'use client';

import { motion } from 'framer-motion';

interface TagNavigationProps {
  tags: string[];
  activeTag: string;
  setActiveTag: (tag: string) => void;
}

const TagNavigation = ({ tags, activeTag, setActiveTag }: TagNavigationProps) => {
  return (
    <nav className="tag-navigation my-24 md:my-32" role="navigation" aria-label="콘텐츠 필터">
      <div className="container max-w-6xl mx-auto px-8 md:px-12 lg:px-16 flex justify-center items-center gap-3 md:gap-4 flex-wrap">
        {tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`tag-button px-3 py-1.5 text-xs md:text-sm font-medium tracking-wider uppercase transition-smooth
              ${activeTag === tag
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 hover:text-black'
              }`
            }
            aria-pressed={activeTag === tag}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default TagNavigation;
