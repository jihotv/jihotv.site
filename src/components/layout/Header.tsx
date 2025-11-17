'use client';

import Link from 'next/link';

interface HeaderProps {
  onSearchOpen: () => void;
}

const Header = ({ onSearchOpen }: HeaderProps) => {
  return (
    <header className="z-40 w-full bg-white/95 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group flex flex-col">
            <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-black transition-smooth group-hover:opacity-85">
              jihotv
            </span>
            <span className="text-xs md:text-sm text-gray-500 mt-0.5 tracking-wide">
              당신의 일상을 특별하게
            </span>
          </Link>
          <button
            onClick={onSearchOpen}
            className="group p-2 hover:bg-gray-50 rounded-full transition-smooth"
            aria-label="검색"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 transition-smooth group-hover:scale-110"
            >
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
