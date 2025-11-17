import Hero from "@/components/Hero";
import FilteredPostGrid from "@/components/FilteredPostGrid";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <>
      <Hero />
      <FilteredPostGrid allPosts={allPosts} />
    </>
  );
}
