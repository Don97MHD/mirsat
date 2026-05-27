import type { Metadata } from "next";
import {
  Cable,
  CheckCircle2,
  MessageCircle,
  Router,
  Settings,
  Smartphone
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { supportedDevices, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "طريقة تركيب IPTV",
  description:
    "دليل مختصر لتشغيل Mirsat TV IPTV على Smart TV و Android TV و Apple TV والجوال مع دعم عربي عبر واتساب.",
  alternates: {
    canonical: "/setup"
  }
};

const setupSteps = [
  {
    icon: Smartphone,
    title: "أرسل نوع الجهاز",
    text: "اكتب لنا موديل الشاشة أو نوع الجهاز حتى نحدد التطبيق والطريقة المناسبة."
  },
  {
    icon: Settings,
    title: "نجهز بيانات التفعيل",
    text: "بعد اختيار الباقة، نرسل لك طريقة الدخول أو الرابط المناسب حسب التطبيق."
  },
  {
    icon: Cable,
    title: "نشغل الخدمة معك",
    text: "نتابع معك خطوة بخطوة حتى تظهر القنوات والمكتبة داخل التطبيق."
  }
];

const troubleshooting = [
  "استخدم إنترنت ثابت، ويفضل كابل للشاشات إذا كانت شبكة الواي فاي ضعيفة.",
  "أغلق التطبيقات المفتوحة على الجهاز إذا كان التشغيل بطيئا.",
  "حدّث التطبيق أو أعد تحميل القائمة إذا ظهرت القنوات بشكل ناقص.",
  "لا تشارك بيانات الاشتراك مع أجهزة كثيرة حتى لا تتأثر الخدمة."
];

export default function SetupPage() {
  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">تركيب سهل</span>
          <h1>نشغل لك IPTV على جهازك بخطوات واضحة</h1>
          <p>
            لا تحتاج خبرة تقنية. أرسل نوع جهازك عبر واتساب وسنرشدك للطريقة
            المناسبة للتفعيل.
          </p>
          <ButtonLink href={whatsappLink} external>
            <MessageCircle size={20} aria-hidden="true" />
            أرسل نوع جهازي
          </ButtonLink>
        </div>
      </section>

      <section className="section" aria-labelledby="setup-title">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">الخطوات</span>
            <h2 id="setup-title">من أول رسالة حتى أول مشاهدة</h2>
          </div>
          <div className="steps-grid">
            {setupSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className="step-card" key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section band-light" aria-labelledby="devices-title">
        <div className="container split-layout">
          <div className="section-heading section-heading-start">
            <span className="eyebrow">الأجهزة</span>
            <h2 id="devices-title">يدعم أغلب أجهزة المشاهدة</h2>
            <p>
              تختلف التطبيقات حسب الجهاز، لذلك نبدأ دائما بمعرفة نوع جهازك لنرسل
              طريقة تشغيل مناسبة.
            </p>
          </div>
          <div className="device-list device-list-light">
            {supportedDevices.map((device) => (
              <span key={device}>
                <Smartphone size={17} aria-hidden="true" />
                {device}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="tips-title">
        <div className="container split-layout">
          <div className="info-panel">
            <Router size={28} aria-hidden="true" />
            <h2 id="tips-title">نصائح لاستقرار أفضل</h2>
            <p>
              IPTV يعتمد على الجهاز والإنترنت والتطبيق. هذه النقاط تساعدك تحصل
              على مشاهدة أهدأ.
            </p>
          </div>
          <div className="included-panel">
            {troubleshooting.map((tip) => (
              <div key={tip} className="included-row">
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
