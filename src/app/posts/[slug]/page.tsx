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
    <article className="container mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-h1 font-bold mb-2">{post.title}</h1>
        <div className="text-gray-500 text-sm">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('ko-KR')}</time>
          <span className="mx-2">·</span>
          <span>{post.author}</span>
          <span className="mx-2">·</span>
          <span>{post.reading_time}분 읽기</span>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold">{tag}</span>
          ))}
        </div>
      </header>

      <div className="relative w-full h-[60vh] max-h-[500px] mb-8">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div
        className="prose lg:prose-xl max-w-none mx-auto"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <PrevNextPostNav prevPost={post.prevPost} nextPost={post.nextPost} />

      <ShareButtons title={post.title} />
    </article>
  );
}
