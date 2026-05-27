import type { MetadataRoute } from "next";
import { blogPosts, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/pricing", "/content", "/setup", "/blog", "/contact"];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.domain}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.domain}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.65
    }))
  ];
}
