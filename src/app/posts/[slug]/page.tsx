import { getAllPostSlugs, getPostData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import PrevNextPostNav from '@/components/PrevNextPostNav';
import { ShareButtons } from '@/components/ShareButtons';

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | jihotv`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.featured_image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function PostPage({ params }: Props) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl mx-auto px-8 md:px-12 lg:px-16 py-12 md:py-20">
      <header className="mb-12 md:mb-16">
        <div className="flex flex-wrap gap-3 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs uppercase tracking-wider text-gray-400">{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 uppercase tracking-wider">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace(/\.$/, '')}</time>
          <span>·</span>
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.reading_time}분</span>
        </div>
      </header>

      <div className="relative w-full aspect-[16/9] mb-12 md:mb-16">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover grayscale-[0.6]"
          priority
        />
      </div>

      <div
        className="prose prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-700 prose-a:text-black prose-a:underline hover:prose-a:opacity-60 prose-strong:text-black prose-img:grayscale-[0.6]"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <div className="mt-16 md:mt-20">
        <PrevNextPostNav prevPost={post.prevPost} nextPost={post.nextPost} />
      </div>

      <div className="mt-12">
        <ShareButtons title={post.title} />
      </div>
    </article>
  );
}
