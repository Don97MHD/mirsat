import type { Metadata } from "next";
import {
  Baby,
  Clapperboard,
  Film,
  Globe2,
  MessageCircle,
  Newspaper,
  Trophy,
  Tv
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { contentCategories, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "القنوات والأفلام والمسلسلات",
  description:
    "تعرف على محتوى Mirsat TV IPTV: قنوات عربية وأوروبية، رياضة، أفلام، مسلسلات، أطفال، ومكتبة حسب الطلب للعرب في أوروبا.",
  alternates: {
    canonical: "/content"
  }
};

const channelGroups = [
  { icon: Newspaper, title: "أخبار ومنوعات", text: "قنوات إخبارية وبرامج يومية للعائلة العربية." },
  { icon: Trophy, title: "رياضة", text: "أقسام رياضية مرتبة حسب التوفر والأحداث." },
  { icon: Clapperboard, title: "سينما", text: "أفلام عربية وأجنبية وهندية وتركية ضمن مكتبة VOD." },
  { icon: Tv, title: "مسلسلات", text: "مسلسلات موسمية وقديمة وحديثة حسب القوائم المتاحة." },
  { icon: Baby, title: "أطفال", text: "محتوى ترفيهي وتعليمي مناسب للأطفال والعائلة." },
  { icon: Globe2, title: "أوروبا", text: "خيارات تناسب المقيمين في أوروبا مع محتوى عربي وعالمي." }
];

export default function ContentPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">محتوى ضخم ومنظم</span>
          <h1>قنوات، أفلام، مسلسلات، ورياضة في قائمة واحدة</h1>
          <p>
            Mirsat TV يوفر تجربة IPTV عربية مرتبة للعرب في أوروبا مع أقسام
            متنوعة وسهلة الوصول على أغلب الأجهزة.
          </p>
          <ButtonLink href={whatsappLink} external>
            <MessageCircle size={20} aria-hidden="true" />
            اسأل عن القائمة
          </ButtonLink>
        </div>
      </section>

      <section className="section" aria-labelledby="groups-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">الأقسام الرئيسية</span>
            <h2 id="groups-title">كل نوع محتوى له مكانه</h2>
            <p>
              القائمة مصممة لتكون سهلة على البيت العربي: ابحث بسرعة عن القناة
              أو الفيلم أو المسلسل بدون فوضى.
            </p>
          </div>
          <div className="benefit-grid">
            {channelGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article className="feature-card" key={group.title}>
                  <div className="feature-icon" aria-hidden="true">
                    <Icon size={26} />
                  </div>
                  <h3>{group.title}</h3>
                  <p>{group.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section band-light" aria-labelledby="details-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">تفاصيل أكثر</span>
            <h2 id="details-title">ماذا تتوقع داخل الاشتراك؟</h2>
          </div>
          <div className="category-grid category-grid-wide">
            {contentCategories.map((category) => (
              <article className="mini-card" key={category.title}>
                <Film size={20} aria-hidden="true" />
                <h3>{category.title}</h3>
                <p>{category.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" aria-labelledby="quality-title">
        <div className="container split-layout">
          <div className="section-heading section-heading-start">
            <span className="eyebrow">جودة وتجربة</span>
            <h2 id="quality-title">الجودة تعتمد على المصدر والإنترنت والجهاز</h2>
            <p>
              تتوفر مستويات جودة متعددة مثل SD و HD و FHD و 4K حسب القناة
              والمصدر. للحصول على أفضل نتيجة، استخدم اتصالا مستقرا وتطبيقا
              مناسبا لجهازك.
            </p>
          </div>
          <div className="info-panel">
            <h3>نصيحة قبل الاشتراك</h3>
            <p>
              أرسل لنا نوع جهازك وبلد إقامتك عبر واتساب، وسنقترح عليك طريقة
              التشغيل الأنسب قبل التفعيل.
            </p>
            <ButtonLink href={whatsappLink} external variant="secondary">
              <MessageCircle size={18} aria-hidden="true" />
              تواصل الآن
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
