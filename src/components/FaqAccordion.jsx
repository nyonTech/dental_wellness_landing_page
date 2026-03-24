"use client";

import { useState } from "react";

const DEFAULT_FAQS = [
  {
    question: "How long does the entire process take?",
    answer:
      "Treatment timelines vary depending on the procedure. During your initial consultation, our team will provide a personalised plan with a clear timeline tailored to your specific needs.",
  },
  {
    question: "Is the procedure painful?",
    answer:
      "We prioritise your comfort throughout every procedure. Most treatments are performed under local anaesthesia, and we offer sedation options for patients with dental anxiety to ensure a pain-free experience.",
  },
  {
    question: "What is the recovery period like?",
    answer:
      "Recovery depends on the type of treatment. Minor procedures typically require little to no downtime, while more involved treatments may require a few days of rest. We provide detailed aftercare instructions for every patient.",
  },
  {
    question: "Are financing options available?",
    answer:
      "Yes. We offer flexible payment plans and work with several financing partners to make your treatment accessible. Speak to our front desk team to learn about the options best suited to your budget.",
  },
];

export default function FaqAccordion({ faqs = DEFAULT_FAQS }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-heading-wrap">
          <h2 className="faq-heading">Common Queries</h2>
        </div>

        <div className="faq-list">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
                <button
                  className="faq-trigger"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`faq-icon-svg${isOpen ? " faq-icon-svg--open" : ""}`}
                    >
                      <path
                        d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z"
                        fill="#0F172A"
                      />
                    </svg>
                  </span>
                </button>

                <div className="faq-body" style={{ maxHeight: isOpen ? "500px" : "0px" }}>
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
