import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = {};
    if (!email) err.email = "Email is required";
    if (!password) err.password = "Password is required";
    setError(err);
    if (Object.keys(err).length === 0) {
      // Handle login logic here
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "60px auto 0", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontWeight: 700, color: "#2d3a4a", marginBottom: 8 }}>Login</h2>
      <div style={{ textAlign: "center", color: "#888", marginBottom: 32 }}>
        Get access to your Orders, Wishlist and<br />Recommendations.
      </div>
      <div style={{
        display: "flex",
        gap: 32,
        justifyContent: "center",
        alignItems: "center"
      }}>
        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 8,
            boxShadow: "0 2px 12px #0001",
            padding: 32,
            minWidth: 340,
            maxWidth: 370,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 18
          }}
        >
          <div>
            <label style={{ fontWeight: 600, color: "#2d3a4a", fontSize: 15 }}>Email Address*</label>
            <input
              type="email"
              placeholder="Enter your email add..."
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: "12px 10px",
                borderRadius: 6,
                border: "1px solid #e0e0e0",
                fontSize: 15,
                fontFamily: "inherit"
              }}
            />
            {error.email && <div style={{ color: "red", fontSize: 13 }}>{error.email}</div>}
          </div>
          <div>
            <label style={{ fontWeight: 600, color: "#2d3a4a", fontSize: 15 }}>Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                width: "100%",
                marginTop: 6,
                padding: "12px 10px",
                borderRadius: 6,
                border: "1px solid #e0e0e0",
                fontSize: 15,
                fontFamily: "inherit"
              }}
            />
            {error.password && <div style={{ color: "red", fontSize: 13 }}>{error.password}</div>}
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 4,
            marginBottom: 8
          }}>
            <span></span>
            <a href="#" style={{ color: "#888", fontSize: 14, textDecoration: "none" }}>Forgot Password?</a>
          </div>
          <button
            type="submit"
            style={{
              background: "#2d3a4a",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "10px 28px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
              alignSelf: "flex-end"
            }}
          >
            Login
          </button>
          <div style={{ marginTop: 8, fontSize: 15 }}>
            <span style={{ color: "#888" }}>Create Account?</span>
          </div>
        </form>
        {/* Image */}
        <div style={{
          flex: 1,
          minWidth: 320,
          maxWidth: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Login Visual"
            style={{
              width: "100%",
              maxWidth: 370,
              borderRadius: 8,
              objectFit: "cover"
            }}
          />
        </div>
      </div>
    </div>
  );
}