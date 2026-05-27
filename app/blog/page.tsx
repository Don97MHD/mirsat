import type { Metadata } from "next";
import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "مدونة IPTV للعرب في أوروبا",
  description:
    "مقالات ونصائح عن اختيار اشتراك IPTV عربي في أوروبا، تشغيل Smart TV، والاستفادة من مكتبة الأفلام والمسلسلات.",
  alternates: {
    canonical: "/blog"
  }
};

export default function BlogPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">مدونة Mirsat TV</span>
          <h1>نصائح IPTV للمشاهدة العربية في أوروبا</h1>
          <p>
            مقالات قصيرة تساعدك تختار الاشتراك المناسب وتشغل الخدمة على جهازك
            بدون تعقيد.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="posts-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">آخر المقالات</span>
            <h2 id="posts-title">محتوى جاهز ويمكنك إضافة المزيد لاحقا</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article className="blog-card" key={post.slug}>
                <div className="blog-meta">
                  <BookOpen size={18} aria-hidden="true" />
                  <span>{post.readingTime}</span>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <h3>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <Link className="text-link" href={`/blog/${post.slug}`}>
                  اقرأ المقال
                  <ArrowLeft size={17} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
