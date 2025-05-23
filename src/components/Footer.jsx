export default function Footer() {
  return (
    <footer style={{ background: "#fafbfc", borderTop: "1px solid #f0f0f0", marginTop: 48 }}>
      <div className="container" style={{ maxWidth: 1400, margin: "0 auto", padding: "48px 16px 0 16px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
        {/* Logo & About */}
        <div style={{ flex: "1 1 220px", minWidth: 220 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 28, color: "#2d3a4a", marginBottom: 16 }}>
            <span style={{ fontSize: 36, color: "#4db38c" }}>🛒</span>
            <span>
              <span style={{ color: "#2d3a4a" }}>Grab</span>
              <span style={{ color: "#4db38c" }}>it</span>
            </span>
          </div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 16 }}>
            Grabit is the biggest market of grocery products.<br />
            Get your daily needs from our store.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <img src="https://i.ibb.co/6b6jQw3/google-play.png" alt="Google Play" style={{ height: 36, borderRadius: 6 }} />
            <img src="https://i.ibb.co/6b6jQw3/app-store.png" alt="App Store" style={{ height: 36, borderRadius: 6 }} />
          </div>
        </div>
        {/* Category */}
        <div style={{ flex: "1 1 160px", minWidth: 160 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 12, borderBottom: "1px solid #eaeaea", paddingBottom: 8 }}>Category</div>
          <div style={{ color: "#555", fontSize: 15, lineHeight: 2 }}>
            Dried Fruit<br />
            Cookies<br />
            Foods<br />
            Fresh Fruit<br />
            Tuber Root<br />
            Vegetables
          </div>
        </div>
        {/* Company */}
        <div style={{ flex: "1 1 160px", minWidth: 160 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 12, borderBottom: "1px solid #eaeaea", paddingBottom: 8 }}>Company</div>
          <div style={{ color: "#555", fontSize: 15, lineHeight: 2 }}>
            About us<br />
            Delivery<br />
            Legal Notice<br />
            Terms & conditions<br />
            Secure payment<br />
            Contact us
          </div>
        </div>
        {/* Account */}
        <div style={{ flex: "1 1 160px", minWidth: 160 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 12, borderBottom: "1px solid #eaeaea", paddingBottom: 8 }}>Account</div>
          <div style={{ color: "#555", fontSize: 15, lineHeight: 2 }}>
            Sign In<br />
            View Cart<br />
            Return Policy<br />
            Become a Vendor<br />
            Affiliate Program<br />
            Payments
          </div>
        </div>
        {/* Contact */}
        <div style={{ flex: "1 1 220px", minWidth: 220 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 12, borderBottom: "1px solid #eaeaea", paddingBottom: 8 }}>Contact</div>
          <div style={{ color: "#555", fontSize: 15, lineHeight: 2, marginBottom: 8 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>📍</span>2548 Broaddus Maple Court, Madisonville KY 4783, USA.
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>🟢</span>+00 9876543210
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span>✉️</span>example@email.com
            </span>
          </div>
          <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="fb" style={{ width: 24, height: 24, filter: "grayscale(1)" }} /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg" alt="tw" style={{ width: 24, height: 24, filter: "grayscale(1)" }} /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="li" style={{ width: 24, height: 24, filter: "grayscale(1)" }} /></a>
            <a href="#"><img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="ig" style={{ width: 24, height: 24, filter: "grayscale(1)" }} /></a>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #eaeaea", marginTop: 32, padding: "16px 0", background: "#f6f7fa" }}>
        <div className="container" style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ color: "#888", fontSize: 14 }}>
            Copyright © <span style={{ color: "#4db38c" }}>Grabit</span> all rights reserved. Powered by Grabit.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <img src="https://i.ibb.co/6b6jQw3/visa.png" alt="visa" style={{ height: 24 }} />
            <img src="https://i.ibb.co/6b6jQw3/paypal.png" alt="paypal" style={{ height: 24 }} />
            <img src="https://i.ibb.co/6b6jQw3/skrill.png" alt="skrill" style={{ height: 24 }} />
            <img src="https://i.ibb.co/6b6jQw3/mastercard.png" alt="mastercard" style={{ height: 24 }} />
            <img src="https://i.ibb.co/6b6jQw3/visa-electron.png" alt="visa electron" style={{ height: 24 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}