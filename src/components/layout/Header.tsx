'use client';

import Link from 'next/link';

interface HeaderProps {
  onSearchOpen: () => void;
}

const Header = ({ onSearchOpen }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-300/40 bg-warm-beige/80 backdrop-blur supports-[backdrop-filter]:bg-warm-beige/60">
      <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">jihotv</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <button onClick={onSearchOpen} className="search-trigger" aria-label="검색">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
