import { faqs } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">أسئلة شائعة</span>
          <h2 id="faq-title">كل ما تحتاج معرفته قبل الاشتراك</h2>
        </div>

        <div className="faq-grid">
          {faqs.map((item) => (
            <details key={item.question} className="faq-item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
