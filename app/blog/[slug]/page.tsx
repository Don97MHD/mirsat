import type { Metadata } from "next";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { blogPosts, siteConfig, whatsappLink } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "مقال غير موجود"
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | Mirsat TV`,
      description: post.excerpt,
      url: `${siteConfig.domain}/blog/${post.slug}`,
      type: "article"
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Mirsat TV"
    },
    publisher: {
      "@type": "Organization",
      name: "Mirsat TV"
    },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="article-page">
        <header className="page-hero compact-hero">
          <div className="container page-hero-inner">
            <Link className="text-link back-link" href="/blog">
              <ArrowRight size={17} aria-hidden="true" />
              العودة للمدونة
            </Link>
            <span className="eyebrow">مدونة IPTV</span>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="article-meta">
              <time dateTime={post.date}>{post.date}</time>
              <span>{post.readingTime}</span>
            </div>
          </div>
        </header>

        <div className="container article-content">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <div className="article-cta">
            <h2>تحتاج مساعدة باختيار الاشتراك؟</h2>
            <p>
              تواصل معنا عبر واتساب واكتب نوع جهازك وبلدك لنقترح عليك طريقة
              التشغيل المناسبة.
            </p>
            <ButtonLink href={whatsappLink} external>
              <MessageCircle size={20} aria-hidden="true" />
              تواصل عبر واتساب
            </ButtonLink>
          </div>
        </div>
      </article>
    </>
  );
}
