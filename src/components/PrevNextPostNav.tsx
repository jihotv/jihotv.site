import Link from 'next/link';

interface NavPost {
  slug: string;
  title: string;
}

interface PrevNextPostNavProps {
  prevPost: NavPost | null;
  nextPost: NavPost | null;
}

const PrevNextPostNav = ({ prevPost, nextPost }: PrevNextPostNavProps) => {
  return (
    <nav className="article-navigation mt-12 pt-8 border-t border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-4">
      {prevPost ? (
        <Link href={`/posts/${prevPost.slug}`} className="nav-prev block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-right">
          <span className="nav-label text-sm text-gray-500 block">이전 글</span>
          <span className="nav-title font-semibold text-gray-800 mt-1 block">{prevPost.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {nextPost ? (
        <Link href={`/posts/${nextPost.slug}`} className="nav-next block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-left">
          <span className="nav-label text-sm text-gray-500 block">다음 글</span>
          <span className="nav-title font-semibold text-gray-800 mt-1 block">{nextPost.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};

export default PrevNextPostNav;
