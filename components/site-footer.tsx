import { ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig, whatsappLink } from "@/lib/site";

const footerLinks = [
  { href: "/pricing", label: "الأسعار" },
  { href: "/content", label: "القنوات والمحتوى" },
  { href: "/setup", label: "طريقة التركيب" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل معنا" }
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo size={54} decorative />
            </span>
            <span className="brand-copy">
              <strong>Mirsat TV</strong>
              <small>تجربة مشاهدة عربية مستقرة</small>
            </span>
          </div>
          <p>
            خدمة IPTV للعرب في أوروبا مع باقات واضحة، دعم سريع، ومحتوى متنوع
            للقنوات والأفلام والمسلسلات.
          </p>
        </div>

        <div>
          <h2>روابط سريعة</h2>
          <ul className="footer-list">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>تواصل</h2>
          <ul className="footer-list contact-list">
            <li>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <MessageCircle size={18} aria-hidden="true" />
                واتساب: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
                <ExternalLink size={18} aria-hidden="true" />
                صفحة فيسبوك
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Mirsat TV. جميع الحقوق محفوظة.</span>
        <span>استخدم الخدمة وفق القوانين المحلية وشروط المحتوى في بلدك.</span>
      </div>
    </footer>
  );
}
