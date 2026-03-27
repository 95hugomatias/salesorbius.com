import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://salesorbius.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: post.isPillar ? 0.9 : 0.7,
  }));

  return [
    {
      url: "https://salesorbius.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://salesorbius.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogEntries,
  ];
}
