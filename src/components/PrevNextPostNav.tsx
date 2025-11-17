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
    <nav className="article-navigation pt-12 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
      {prevPost ? (
        <Link href={`/posts/${prevPost.slug}`} className="nav-prev group block p-6 border border-gray-200 hover:border-black transition-smooth">
          <span className="nav-label text-xs uppercase tracking-wider text-gray-400 block mb-3">이전 글</span>
          <span className="nav-title font-bold text-lg text-black group-hover:opacity-60 transition-smooth block">{prevPost.title}</span>
        </Link>
      ) : (
        <div />
      )}
      {nextPost ? (
        <Link href={`/posts/${nextPost.slug}`} className="nav-next group block p-6 border border-gray-200 hover:border-black transition-smooth">
          <span className="nav-label text-xs uppercase tracking-wider text-gray-400 block mb-3">다음 글</span>
          <span className="nav-title font-bold text-lg text-black group-hover:opacity-60 transition-smooth block">{nextPost.title}</span>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
};

export default PrevNextPostNav;
