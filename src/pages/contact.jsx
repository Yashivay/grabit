import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    if (!form.name) err.name = "Full Name is required";
    if (!form.email) err.email = "Email is required";
    if (!form.phone) err.phone = "Phone is required";
    if (!form.message) err.message = "Message is required";
    setError(err);
    if (Object.keys(err).length === 0) {
      // Submit logic here
    }
  };

  return (
    <div style={{ maxWidth: 1400, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontWeight: 700, color: "#2d3a4a", marginBottom: 4 }}>
        Get In <span style={{ color: "#4db38c" }}>Touch</span>
      </h2>
      <div style={{ textAlign: "center", color: "#888", marginBottom: 32, fontSize: 15 }}>
        Please select a topic below related to your inquiry. If you don’t find what you need, fill out our contact form.
      </div>
      <div style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        marginBottom: 36,
        flexWrap: "wrap"
      }}>
        {/* Mail & Website */}
        <div style={{
          flex: 1,
          minWidth: 300,
          background: "#fafbfc",
          borderRadius: 8,
          padding: "32px 18px",
          textAlign: "center",
          boxShadow: "0 2px 12px #0001"
        }}>
          <div style={{
            background: "#4d5a68",
            width: 56,
            height: 56,
            borderRadius: 12,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <span style={{ color: "#fff", fontSize: 32 }}>✉️</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a4a", marginBottom: 6 }}>Mail & Website</div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 4 }}>
            <span style={{ display: "block", marginBottom: 2 }}>mail.example@gmail.com</span>
            <span style={{ display: "block" }}>www.yourdomain.com</span>
          </div>
        </div>
        {/* Contact */}
        <div style={{
          flex: 1,
          minWidth: 300,
          background: "#fafbfc",
          borderRadius: 8,
          padding: "32px 18px",
          textAlign: "center",
          boxShadow: "0 2px 12px #0001"
        }}>
          <div style={{
            background: "#4d5a68",
            width: 56,
            height: 56,
            borderRadius: 12,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <span style={{ color: "#fff", fontSize: 32 }}>📱</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a4a", marginBottom: 6 }}>Contact</div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 4 }}>
            <span style={{ display: "block", marginBottom: 2 }}>(+91)-9876XXXXX</span>
            <span style={{ display: "block" }}>(+91)-987654XXXX</span>
          </div>
        </div>
        {/* Address */}
        <div style={{
          flex: 1,
          minWidth: 300,
          background: "#fafbfc",
          borderRadius: 8,
          padding: "32px 18px",
          textAlign: "center",
          boxShadow: "0 2px 12px #0001"
        }}>
          <div style={{
            background: "#4d5a68",
            width: 56,
            height: 56,
            borderRadius: 12,
            margin: "0 auto 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <span style={{ color: "#fff", fontSize: 32 }}>📍</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a4a", marginBottom: 6 }}>Address</div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 4 }}>
            <span style={{ display: "block" }}>
              Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.
            </span>
          </div>
        </div>
      </div>
      <div style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap"
      }}>
        {/* Google Map */}
        <div style={{
          flex: 1,
          minWidth: 420,
          maxWidth: 600,
          background: "#fff",
          borderRadius: 8,
          boxShadow: "0 2px 12px #0001",
          overflow: "hidden"
        }}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=-12.9431,-38.4536&z=15&output=embed"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            minWidth: 420,
            maxWidth: 600,
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 12px #0001",
            padding: 24,
            display: "flex",
            flexDirection: "column",
            gap: 18
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={{
              padding: "12px 10px",
              borderRadius: 6,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              fontFamily: "inherit"
            }}
          />
          {error.name && <div style={{ color: "red", fontSize: 13 }}>{error.name}</div>}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            style={{
              padding: "12px 10px",
              borderRadius: 6,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              fontFamily: "inherit"
            }}
          />
          {error.email && <div style={{ color: "red", fontSize: 13 }}>{error.email}</div>}
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            style={{
              padding: "12px 10px",
              borderRadius: 6,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              fontFamily: "inherit"
            }}
          />
          {error.phone && <div style={{ color: "red", fontSize: 13 }}>{error.phone}</div>}
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            style={{
              padding: "12px 10px",
              borderRadius: 6,
              border: "1px solid #e0e0e0",
              fontSize: 15,
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
          {error.message && <div style={{ color: "red", fontSize: 13 }}>{error.message}</div>}
          <button
            type="submit"
            style={{
              background: "#4db38c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              alignSelf: "flex-start"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
