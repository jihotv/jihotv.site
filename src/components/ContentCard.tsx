'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContentCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  featured_image: string;
}

const ContentCard = ({ slug, title, excerpt, date, tags, featured_image }: ContentCardProps) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{
        opacity: { duration: 0.3 },
        layout: { duration: 0.3, type: "spring" }
      }}
      className="content-card bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Link href={slug} className="card-link group">
        <div className="card-image-wrapper relative w-full h-48">
          <Image
            src={featured_image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="card-content p-4 md:p-6">
          <div className="card-meta mb-2 flex items-center justify-between text-xs text-gray-500">
            <span className="card-tag font-semibold bg-soft-blue/20 text-deep-blue px-2 py-1 rounded-full">{tags[0]}</span>
            <time dateTime={date}>{new Date(date).toLocaleDateString('ko-KR')}</time>
          </div>
          <h3 className="card-title text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-deep-blue transition-colors">
            {title}
          </h3>
          <p className="card-excerpt text-sm text-gray-700">
            {excerpt}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};

export default ContentCard;
