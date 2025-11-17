'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { shareUtils } from '@/utils/share';

interface ShareButtonsProps {
  title: string;
}

export const ShareButtons = ({ title }: ShareButtonsProps) => {
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Ensure window is defined
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.origin + pathname);
    }
  }, [pathname]);

  const handleCopy = () => {
    shareUtils.copyLink(currentUrl, () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="share-section pt-8 border-t border-gray-200">
      <h3 className="text-center text-xs uppercase tracking-wider text-gray-400 mb-6">공유</h3>
      <div className="share-buttons flex justify-center gap-3">
        <button
          onClick={() => shareUtils.twitter(currentUrl, title)}
          aria-label="Share on Twitter"
          className="p-3 border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-smooth"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/></svg>
        </button>
        <button
          onClick={() => shareUtils.facebook(currentUrl)}
          aria-label="Share on Facebook"
          className="p-3 border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-smooth"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5.52 4.5 10.02 10 10.02s10-4.5 10-10.02C22 6.53 17.5 2.04 12 2.04zM13.6 19.14v-6.3h2.15l.32-2.5h-2.47v-1.6c0-.72.2-1.2.9-1.2h1.3V5.24c-.2-.03-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v1.86H9.4v2.5h2.1v6.3h2.1z"/></svg>
        </button>
        <button
          onClick={handleCopy}
          aria-label="Copy link"
          className="p-3 border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-smooth"
        >
          {copied ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.72-1.72" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>
      </div>
      {copied && <p className="text-center text-xs text-gray-400 mt-4">링크가 복사되었습니다</p>}
    </div>
  );
};
