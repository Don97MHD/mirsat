import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, ShieldCheck, WalletCards } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { FaqSection } from "@/components/faq-section";
import { PricingSection } from "@/components/pricing-section";
import { plans, siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "أسعار اشتراك IPTV",
  description:
    "أسعار اشتراك Mirsat TV IPTV: سنة 50 يورو أو سنتين 85 يورو مع قنوات عربية، أفلام، مسلسلات، ودعم عبر واتساب.",
  alternates: {
    canonical: "/pricing"
  }
};

const included = [
  "تفعيل سريع بعد التواصل",
  "محتوى عربي وعالمي متنوع",
  "دعم تركيب حسب نوع الجهاز",
  "مساعدة عند تغيير التطبيق أو الجهاز",
  "تجربة مناسبة للعرب في أوروبا"
];

export default function PricingPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">أسعار شفافة</span>
          <h1>باقات IPTV واضحة: سنة 50€ أو سنتين 85€</h1>
          <p>
            اختر مدة الاشتراك المناسبة، وتواصل معنا عبر واتساب لنفعّل لك الخدمة
            على جهازك بخطوات بسيطة.
          </p>
          <ButtonLink href={whatsappLink} external>
            <MessageCircle size={20} aria-hidden="true" />
            اطلب الاشتراك الآن
          </ButtonLink>
        </div>
      </section>

      <PricingSection />

      <section className="section" aria-labelledby="included-title">
        <div className="container split-layout">
          <div className="section-heading section-heading-start">
            <span className="eyebrow">ماذا تحصل؟</span>
            <h2 id="included-title">اشتراك مرتب، دعم واضح، وقيمة ممتازة</h2>
            <p>
              هدفنا أن تبدأ المشاهدة بدون تعقيد. نساعدك بالاختيار، التفعيل،
              وخطوات التشغيل المناسبة لجهازك.
            </p>
          </div>

          <div className="included-panel">
            {included.map((item) => (
              <div key={item} className="included-row">
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-light" aria-labelledby="compare-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">مقارنة سريعة</span>
            <h2 id="compare-title">أي باقة أنسب لك؟</h2>
          </div>
          <div className="compare-table" role="table" aria-label="مقارنة الباقات">
            <div className="compare-row compare-head" role="row">
              <span role="columnheader">الباقة</span>
              <span role="columnheader">المدة</span>
              <span role="columnheader">السعر</span>
              <span role="columnheader">مناسبة لمن؟</span>
            </div>
            {plans.map((plan, index) => (
              <div className="compare-row" role="row" key={plan.name}>
                <span role="cell">{plan.name}</span>
                <span role="cell">{plan.period}</span>
                <span role="cell">{plan.price}</span>
                <span role="cell">
                  {index === 0
                    ? "لمن يريد اشتراكا سنويا مرنا"
                    : "لمن يريد توفيرا أفضل وراحة أطول"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="trust-title">
        <div className="container trust-grid">
          <article className="feature-card">
            <WalletCards size={28} aria-hidden="true" />
            <h2 id="trust-title">الدفع والتفعيل</h2>
            <p>
              يتم الاتفاق على تفاصيل الدفع والتفعيل مباشرة عبر واتساب لتبقى
              العملية واضحة وسريعة.
            </p>
          </article>
          <article className="feature-card">
            <ShieldCheck size={28} aria-hidden="true" />
            <h2>استخدام مسؤول</h2>
            <p>
              ننصح باستخدام الخدمة وفق القوانين المحلية وشروط المحتوى في بلد
              الإقامة.
            </p>
          </article>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
