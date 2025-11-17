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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        opacity: { duration: 0.4 },
        y: { duration: 0.4 },
        layout: { duration: 0.3, type: "spring" }
      }}
      className="content-card group"
    >
      <Link href={slug} className="card-link block">
        <div className="card-image-wrapper relative w-full aspect-[4/3] overflow-hidden bg-gray-100 mb-4">
          <Image
            src={featured_image}
            alt={title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-smooth duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="card-content space-y-3">
          <div className="card-meta flex items-center justify-between text-xs text-gray-500 uppercase tracking-wider">
            <span className="card-tag">{tags[0]}</span>
            <time dateTime={date}>{new Date(date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace(/\.$/, '')}</time>
          </div>
          <h3 className="card-title text-xl md:text-2xl font-bold text-black leading-tight group-hover:opacity-60 transition-smooth">
            {title}
          </h3>
          <p className="card-excerpt text-sm md:text-base text-gray-600 leading-relaxed line-clamp-2">
            {excerpt}
          </p>
          <div className="inline-block">
            <span className="text-xs font-medium text-black group-hover:text-accent transition-smooth border-b border-transparent group-hover:border-current pb-0.5">
              READ MORE
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ContentCard;
