import { useState } from "react";

const faqData = [
  { question: "What is the multi vendor services?", answer: "Multi vendor services allow multiple sellers to offer their products on a single platform, giving customers more variety and options." },
  { question: "How to buy many products at a time?", answer: "Add all desired products to your cart and proceed to checkout to purchase them together." },
  { question: "Refund policy for customer.", answer: "Customers can request a refund within 7 days of delivery if the product is eligible as per our refund policy." },
  { question: "Exchange policy for customer.", answer: "Products can be exchanged within 7 days of delivery if they meet our exchange criteria." },
  { question: "Give a way products available.", answer: "Giveaway products are available during special promotions. Check our offers page for more details." },
  // Duplicate for right column
  { question: "Refund policy for customer.", answer: "Customers can request a refund within 7 days of delivery if the product is eligible as per our refund policy." },
  { question: "Exchange policy for customer.", answer: "Products can be exchanged within 7 days of delivery if they meet our exchange criteria." },
  { question: "How to buy many products at a time?", answer: "Add all desired products to your cart and proceed to checkout to purchase them together." },
  { question: "Give a way products available.", answer: "Giveaway products are available during special promotions. Check our offers page for more details." },
  { question: "What is the multi vendor services?", answer: "Multi vendor services allow multiple sellers to offer their products on a single platform, giving customers more variety and options." },
];

export default function Faq() {
  const [open, setOpen] = useState(Array(faqData.length).fill(false));

  // Split into two columns
  const mid = Math.ceil(faqData.length / 2);
  const leftFaqs = faqData.slice(0, mid);
  const rightFaqs = faqData.slice(mid);

  const handleToggle = (idx) => {
    setOpen(open => open.map((v, i) => i === idx ? !v : v));
  };

  return (
    <div style={{ maxWidth: 1400, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontWeight: 700, color: "#2d3a4a", marginBottom: 4 }}>
        Frequently Asked <span style={{ color: "#4db38c" }}>Questions</span>
      </h2>
      <div style={{ textAlign: "center", color: "#888", marginBottom: 32, fontSize: 15 }}>
        Customer service management.
      </div>
      <div style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap"
      }}>
        {/* Left Column */}
        <div style={{ flex: 1, minWidth: 400, maxWidth: 600 }}>
          {leftFaqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fafbfc",
                borderRadius: 6,
                marginBottom: 14,
                boxShadow: "0 1px 4px #0001",
                border: "1px solid #f0f0f0"
              }}
            >
              <button
                onClick={() => handleToggle(i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  outline: "none",
                  textAlign: "left",
                  padding: "18px 24px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#2d3a4a",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                {faq.question}
                <span style={{
                  transition: "transform 0.2s",
                  transform: open[i] ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#4d5a68"
                }}>▼</span>
              </button>
              {open[i] && (
                <div style={{
                  padding: "0 24px 18px 24px",
                  color: "#555",
                  fontSize: 15,
                  borderTop: "1px solid #eee"
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Column */}
        <div style={{ flex: 1, minWidth: 400, maxWidth: 600 }}>
          {rightFaqs.map((faq, i) => (
            <div
              key={i + mid}
              style={{
                background: "#fafbfc",
                borderRadius: 6,
                marginBottom: 14,
                boxShadow: "0 1px 4px #0001",
                border: "1px solid #f0f0f0"
              }}
            >
              <button
                onClick={() => handleToggle(i + mid)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  outline: "none",
                  textAlign: "left",
                  padding: "18px 24px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#2d3a4a",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                {faq.question}
                <span style={{
                  transition: "transform 0.2s",
                  transform: open[i + mid] ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#4d5a68"
                }}>▼</span>
              </button>
              {open[i + mid] && (
                <div style={{
                  padding: "0 24px 18px 24px",
                  color: "#555",
                  fontSize: 15,
                  borderTop: "1px solid #eee"
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}