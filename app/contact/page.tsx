import type { Metadata } from "next";
import { ExternalLink, MessageCircle, Send, Smartphone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "تواصل وشراء اشتراك IPTV",
  description:
    "تواصل مع Mirsat TV عبر واتساب أو فيسبوك لشراء اشتراك IPTV سنة 50 يورو أو سنتين 85 يورو.",
  alternates: {
    canonical: "/contact"
  }
};

const contactSteps = [
  "اكتب نوع جهازك: Smart TV، Android، Apple TV، أو غيره.",
  "اختر الباقة: سنة 50€ أو سنتين 85€.",
  "انتظر بيانات التفعيل وخطوات التركيب المناسبة."
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">تواصل مباشر</span>
          <h1>اشتري اشتراك Mirsat TV عبر واتساب</h1>
          <p>
            أسرع طريقة للشراء والتفعيل هي واتساب. أرسل نوع جهازك وبلدك وسنرد
            عليك بالتفاصيل.
          </p>
          <div className="hero-actions">
            <ButtonLink href={whatsappLink} external>
              <MessageCircle size={20} aria-hidden="true" />
              تواصل واتساب
            </ButtonLink>
            <ButtonLink href={siteConfig.facebook} external variant="secondary">
              <ExternalLink size={20} aria-hidden="true" />
              صفحة فيسبوك
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contact-title">
        <div className="container split-layout">
          <div className="section-heading section-heading-start">
            <span className="eyebrow">قبل أن تراسلنا</span>
            <h2 id="contact-title">هذه المعلومات تسرع التفعيل</h2>
            <p>
              كلما كانت معلومات الجهاز أوضح، اخترنا لك التطبيق والطريقة الأنسب
              بسرعة.
            </p>
          </div>
          <div className="included-panel">
            {contactSteps.map((step) => (
              <div key={step} className="included-row">
                <Send size={20} aria-hidden="true" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section band-light" aria-labelledby="channels-title">
        <div className="container contact-grid">
          <a className="contact-card" href={whatsappLink} target="_blank" rel="noreferrer">
            <MessageCircle size={30} aria-hidden="true" />
            <h2 id="channels-title">واتساب</h2>
            <p>{siteConfig.phoneDisplay}</p>
            <span>شراء وتفعيل ودعم</span>
          </a>
          <a
            className="contact-card"
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={30} aria-hidden="true" />
            <h2>فيسبوك</h2>
            <p>Mirsat TV</p>
            <span>تابع الصفحة وآخر الأخبار</span>
          </a>
          <div className="contact-card">
            <Smartphone size={30} aria-hidden="true" />
            <h2>الأجهزة</h2>
            <p>أرسل صورة الجهاز</p>
            <span>لنحدد طريقة التشغيل</span>
          </div>
        </div>
      </section>
    </>
  );
}
