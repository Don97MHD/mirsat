import { Check, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { plans, whatsappLink } from "@/lib/site";

export function PricingSection() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">باقات واضحة</span>
          <h2 id="pricing-title">اشترك بالسنة أو وفر أكثر مع باقة السنتين</h2>
          <p>
            أسعار مباشرة بدون تعقيد. تواصل معنا على واتساب ونجهز لك التفعيل حسب
            جهازك.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article className="pricing-card" key={plan.name}>
              <div className="plan-badge">{plan.badge}</div>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price-row">
                <strong>{plan.price}</strong>
                <span>{plan.period}</span>
              </div>
              <ul className="check-list">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={18} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ButtonLink href={whatsappLink} external className="full-button">
                <MessageCircle size={18} aria-hidden="true" />
                اطلب هذه الباقة
              </ButtonLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
