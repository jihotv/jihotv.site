import type { Metadata } from 'next';
import { cn } from '@/lib/utils';
import './globals.css';
import Footer from '@/components/layout/Footer';
import SearchProvider from '@/components/providers/SearchProvider';
import { getSortedPostsData } from '@/lib/posts';

export const metadata: Metadata = {
  title: "jihotv",
  description: "넥스트 컬쳐 아카이브",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allPosts = getSortedPostsData();

  return (
    <html lang="ko">
      <body className={cn("min-h-screen font-body antialiased")}>
        <div className="relative flex min-h-screen flex-col bg-white">
          <SearchProvider allPosts={allPosts}>
            <main className="flex-1">{children}</main>
          </SearchProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
