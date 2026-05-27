import { Home } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="page-hero compact-hero not-found">
      <div className="container page-hero-inner">
        <span className="eyebrow">404</span>
        <h1>الصفحة غير موجودة</h1>
        <p>الرابط الذي فتحته غير متاح. يمكنك العودة للرئيسية والمتابعة من هناك.</p>
        <ButtonLink href="/">
          <Home size={20} aria-hidden="true" />
          العودة للرئيسية
        </ButtonLink>
      </div>
    </section>
  );
}
