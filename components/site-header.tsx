import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ButtonLink } from "@/components/button-link";
import { whatsappLink } from "@/lib/site";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/content", label: "المحتوى" },
  { href: "/setup", label: "التركيب" },
  { href: "/blog", label: "المدونة" },
  { href: "/contact", label: "تواصل" }
];

export function SiteHeader() {
  return (
    <>
      <div className="site-topbar">
        <div className="container topbar-inner">
          <span>اشتراك IPTV عربي مخصص للعرب في أوروبا</span>
          <span>سنة 50€ | سنتين 85€</span>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Mirsat TV الرئيسية">
            <span className="brand-mark" aria-hidden="true">
              <BrandLogo size={54} decorative />
            </span>
            <span className="brand-copy">
              <strong>Mirsat TV</strong>
              <small>IPTV عربي في أوروبا</small>
            </span>
          </Link>

          <nav className="site-nav" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <ButtonLink
            href={whatsappLink}
            external
            className="header-cta"
            ariaLabel="اشترك عبر واتساب"
          >
            <MessageCircle size={18} aria-hidden="true" />
            اشترك الآن
          </ButtonLink>
        </div>
      </header>
    </>
  );
}
