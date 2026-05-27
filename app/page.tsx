import {
  BadgeEuro,
  Film,
  Globe2,
  Headphones,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Smartphone,
  Star,
  Tv,
  Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ButtonLink } from "@/components/button-link";
import { FaqSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import {
  contentCategories,
  siteConfig,
  supportedDevices,
  whatsappLink
} from "@/lib/site";

const benefits = [
  {
    icon: Tv,
    title: "قنوات كثيرة ومنظمة",
    text: "قنوات عربية، أوروبية، رياضية، عائلية، إخبارية، وأقسام حسب الطلب في مكان واحد."
  },
  {
    icon: Zap,
    title: "تشغيل سريع وثابت",
    text: "تجربة مصممة للمشاهدة اليومية مع جودة مناسبة لاتصالك وجهازك."
  },
  {
    icon: Headphones,
    title: "دعم عربي مباشر",
    text: "تواصل عبر واتساب للشراء، التفعيل، والمساعدة في اختيار التطبيق المناسب."
  }
];

const stats = [
  { value: "50€", label: "اشتراك سنة" },
  { value: "85€", label: "اشتراك سنتين" },
  { value: "4K", label: "جودة تصل إلى" },
  { value: "24/7", label: "دعم ومتابعة" }
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mirsat TV IPTV",
  description: siteConfig.description,
  url: siteConfig.domain,
  areaServed: siteConfig.areaServed,
  provider: {
    "@type": "Organization",
    name: "Mirsat TV",
    url: siteConfig.domain,
    sameAs: [siteConfig.facebook]
  },
  offers: [
    {
      "@type": "Offer",
      name: "اشتراك IPTV سنة",
      price: "50",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.domain}/pricing`
    },
    {
      "@type": "Offer",
      name: "اشتراك IPTV سنتين",
      price: "85",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.domain}/pricing`
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="hero" aria-labelledby="home-title">
        <div className="hero-image" aria-hidden="true">
          <Image
            src="/images/mirsat-tv-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">
              IPTV عربي للعرب في أوروبا
            </span>
            <h1 id="home-title">
              Mirsat TV يجمع القنوات والأفلام والمسلسلات بتجربة واحدة سريعة
            </h1>
            <p>
              اشتراك IPTV واضح وسهل التركيب، مناسب للعائلات العربية في أوروبا
              مع قائمة كبيرة ومتنوعة من القنوات والمحتوى حسب الطلب.
            </p>
            <div className="hero-actions">
              <ButtonLink href={whatsappLink} external>
                <MessageCircle size={20} aria-hidden="true" />
                اشترك عبر واتساب
              </ButtonLink>
              <ButtonLink href="/content" variant="secondary">
                <PlayCircle size={20} aria-hidden="true" />
                شاهد الأقسام
              </ButtonLink>
            </div>
            <div className="hero-stats" aria-label="ملخص الباقات والمزايا">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="hero-logo-stage">
                <BrandLogo size={268} decorative className="hero-logo" />
                <span className="hero-signal hero-signal-one" />
                <span className="hero-signal hero-signal-two" />
                <span className="hero-signal hero-signal-three" />
                <span className="hero-chip hero-chip-live">LIVE</span>
                <span className="hero-chip hero-chip-uhd">4K</span>
                <span className="hero-chip hero-chip-vod">VOD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ليش Mirsat TV؟</span>
            <h2 id="why-title">مصمم لمشاهدة عربية مريحة خارج الوطن</h2>
            <p>
              بدل التنقل بين تطبيقات كثيرة، تحصل على قنوات ومكتبة ترفيهية
              منظمة ودعم يساعدك تشغل الخدمة على جهازك بسرعة.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article className="feature-card" key={benefit.title}>
                  <div className="feature-icon" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PricingSection />

      <section className="section content-preview" aria-labelledby="content-title">
        <div className="container split-layout">
          <div className="section-heading section-heading-start">
            <span className="eyebrow">محتوى متنوع</span>
            <h2 id="content-title">قائمة كبيرة من القنوات والمسلسلات والأفلام</h2>
            <p>
              أقسام واضحة تناسب البيت العربي: أخبار، رياضة، أطفال، أفلام،
              مسلسلات، وقنوات محلية وعالمية.
            </p>
            <ButtonLink href="/content" variant="ghost">
              <Star size={18} aria-hidden="true" />
              تفاصيل المحتوى
            </ButtonLink>
          </div>
          <div className="category-grid">
            {contentCategories.slice(0, 6).map((category) => (
              <article className="mini-card" key={category.title}>
                <Film size={20} aria-hidden="true" />
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-dark" aria-labelledby="europe-title">
        <div className="container band-grid">
          <div>
            <span className="eyebrow">للعرب في أوروبا</span>
            <h2 id="europe-title">يشتغل على أجهزتك المفضلة أينما كنت</h2>
            <p>
              سواء كنت في ألمانيا، فرنسا، هولندا، السويد أو أي بلد أوروبي،
              نساعدك تختار طريقة تشغيل مناسبة لجهازك واتصالك.
            </p>
          </div>
          <div className="device-list" aria-label="الأجهزة المدعومة">
            {supportedDevices.map((device) => (
              <span key={device}>
                <Smartphone size={17} aria-hidden="true" />
                {device}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="process-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">طريقة الاشتراك</span>
            <h2 id="process-title">ثلاث خطوات وتبدأ المشاهدة</h2>
          </div>
          <div className="steps-grid">
            <article className="step-card">
              <span>01</span>
              <Globe2 size={24} aria-hidden="true" />
              <h3>تواصل عبر واتساب</h3>
              <p>أرسل بلدك ونوع جهازك واختر باقة سنة أو سنتين.</p>
            </article>
            <article className="step-card">
              <span>02</span>
              <BadgeEuro size={24} aria-hidden="true" />
              <h3>تأكيد الاشتراك</h3>
              <p>بعد الاتفاق على الباقة، نجهز بيانات التفعيل المناسبة لك.</p>
            </article>
            <article className="step-card">
              <span>03</span>
              <ShieldCheck size={24} aria-hidden="true" />
              <h3>تركيب ومتابعة</h3>
              <p>نرسل الخطوات ونتابع معك حتى تعمل الخدمة على جهازك.</p>
            </article>
          </div>
        </div>
      </section>

      <FaqSection />

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="container final-cta-inner">
          <div>
            <span className="eyebrow">ابدأ اليوم</span>
            <h2 id="final-cta-title">جاهز تشغل Mirsat TV على جهازك؟</h2>
            <p>
              اكتب لنا على واتساب وسنساعدك باختيار الاشتراك الأنسب وطريقة
              التركيب حسب جهازك.
            </p>
          </div>
          <ButtonLink href={whatsappLink} external>
            <MessageCircle size={20} aria-hidden="true" />
            تواصل للشراء
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
