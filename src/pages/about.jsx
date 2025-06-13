export default function About() {
  return (
    <div style={{ maxWidth: 1400, margin: "40px auto 0 auto", padding: "0 16px" }}>
      {/* Top Section */}
      <div style={{ display: "flex", gap: 40, alignItems: "flex-start", marginBottom: 60 }}>
        {/* Left Images */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <img
            src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
            alt="Store"
            style={{
              width: 340,
              height: 340,
              objectFit: "cover",
              borderRadius: 6,
              boxShadow: "0 2px 12px #0001"
            }}
          />
          <div style={{ display: "flex", gap: 18 }}>
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=180&q=80"
              alt="Tomato Farm"
              style={{
                width: 160,
                height: 160,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: "0 2px 12px #0001"
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=180&q=80"
              alt="Greenhouse"
              style={{
                width: 160,
                height: 160,
                objectFit: "cover",
                borderRadius: 6,
                boxShadow: "0 2px 12px #0001"
              }}
            />
          </div>
        </div>
        {/* Right Content */}
        <div style={{ flex: 1, marginLeft: 10 }}>
          <h2 style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 28, marginBottom: 8 }}>
            Who We <span style={{ color: "#4db38c" }}>Are?</span>
          </h2>
          <div style={{ color: "#888", fontWeight: 600, fontSize: 15, marginBottom: 18 }}>
            WE’RE HERE TO SERVE ONLY THE BEST PRODUCTS FOR YOU. ENRICHING YOUR HOMES WITH THE BEST ESSENTIALS.
          </div>
          <div style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <div style={{ color: "#666", fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
            Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </div>
          <div style={{ color: "#666", fontSize: 15, lineHeight: 1.8 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
        </div>
      </div>
      {/* Services Section */}
      <div style={{ textAlign: "center", margin: "60px 0 18px 0" }}>
        <h2 style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 24, marginBottom: 4 }}>
          Our <span style={{ color: "#4db38c" }}>Services</span>
        </h2>
        <div style={{ color: "#888", fontSize: 15, marginBottom: 24 }}>
          Customer service should not be a department. It<br />
          should be the entire company.
        </div>
      </div>
      <div style={{
        display: "flex",
        gap: 24,
        justifyContent: "center",
        flexWrap: "wrap",
        marginBottom: 40
      }}>
        {/* Service 1 */}
        <div style={serviceCardStyle}>
          <div style={{ fontSize: 38, color: "#4db38c", marginBottom: 10 }}>
            <i className="fa fa-truck" aria-hidden="true"></i>
          </div>
          <div style={serviceTitleStyle}>Free Shipping</div>
          <div style={serviceDescStyle}>Free shipping on all US order or order above $200</div>
        </div>
        {/* Service 2 */}
        <div style={serviceCardStyle}>
          <div style={{ fontSize: 38, color: "#4db38c", marginBottom: 10 }}>
            <i className="fa fa-headphones" aria-hidden="true"></i>
          </div>
          <div style={serviceTitleStyle}>24X7 Support</div>
          <div style={serviceDescStyle}>Contact us 24 hours a day, 7 days a week</div>
        </div>
        {/* Service 3 */}
        <div style={serviceCardStyle}>
          <div style={{ fontSize: 38, color: "#4db38c", marginBottom: 10 }}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </div>
          <div style={serviceTitleStyle}>30 Days Return</div>
          <div style={serviceDescStyle}>Simply return it within 30 days for an exchange</div>
        </div>
        {/* Service 4 */}
        <div style={serviceCardStyle}>
          <div style={{ fontSize: 38, color: "#4db38c", marginBottom: 10 }}>
            <i className="fa fa-credit-card" aria-hidden="true"></i>
          </div>
          <div style={serviceTitleStyle}>Payment Secure</div>
          <div style={serviceDescStyle}>Contact us 24 hours a day, 7 days a week</div>
        </div>
      </div>
    </div>
  );
}

const serviceCardStyle = {
  background: "#fff",
  borderRadius: 8,
  boxShadow: "0 2px 12px #0001",
  padding: "38px 18px 28px 18px",
  minWidth: 260,
  maxWidth: 320,
  flex: "1 1 260px",
  textAlign: "center",
  marginBottom: 12,
  border: "1px solid #f3f3f3"
};

const serviceTitleStyle = {
  fontWeight: 600,
  color: "#2d3a4a",
  fontSize: 17,
  marginBottom: 6
};

const serviceDescStyle = {
  color: "#888",
  fontSize: 14
};
