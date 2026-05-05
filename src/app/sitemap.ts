import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/data/blog-posts";

const BASE = "https://www.salesorbius.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly",
    priority: post.isPillar ? 0.8 : 0.7,
  }));

  return [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...blogEntries,
  ];
}
