import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  featured_image: string;
  excerpt:string;
  author: string;
  reading_time: number;
  contentHtml: string; // Changed from content to contentHtml
  prevPost: { slug: string; title: string } | null;
  nextPost: { slug: string; title: string } | null;
}

export function getSortedPostsData() {
  const allPostsFolders = fs.readdirSync(postsDirectory);

  const allPostsData = allPostsFolders.map((folderName) => {
    const slug = folderName;
    const fullPath = path.join(postsDirectory, folderName, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { [key: string]: any }),
    };
  });

  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });

  // Add prev/next post info
  return sortedPosts.map((post, index) => {
    const prevPost = index > 0 ? { slug: sortedPosts[index - 1].slug, title: sortedPosts[index - 1].title } : null;
    const nextPost = index < sortedPosts.length - 1 ? { slug: sortedPosts[index + 1].slug, title: sortedPosts[index + 1].title } : null;
    return {
      ...post,
      prevPost,
      nextPost,
    }
  }) as (Omit<PostData, 'contentHtml'> & { [key: string]: any })[];
}

export function getAllPostSlugs() {
  const allPostsFolders = fs.readdirSync(postsDirectory);
  return allPostsFolders.map((folderName) => {
    return {
      slug: folderName,
    };
  });
}

export async function getPostData(slug: string): Promise<PostData> {
  const sortedPosts = getSortedPostsData();
  const postIndex = sortedPosts.findIndex(p => p.slug === slug);
  
  const fullPath = path.join(postsDirectory, slug, 'index.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { [key: string]: any }),
    prevPost: postIndex > 0 ? { slug: sortedPosts[postIndex - 1].slug, title: sortedPosts[postIndex - 1].title } : null,
    nextPost: postIndex < sortedPosts.length - 1 ? { slug: sortedPosts[postIndex + 1].slug, title: sortedPosts[postIndex + 1].title } : null,
  } as PostData;
}
