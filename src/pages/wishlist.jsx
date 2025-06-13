import React from "react";

const wishlistData = [
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/128/891/891419.png",
    name: "Women's wallet Hand Purse",
    date: "10/06/2025",
    price: 70,
    status: "Available"
  },
  {
    id: 2,
    img: "https://cdn-icons-png.flaticon.com/128/3082/3082035.png",
    name: "Rose Gold Earring",
    date: "10/06/2025",
    price: 80,
    status: "Out Of Stock"
  },
  {
    id: 3,
    img: "https://cdn-icons-png.flaticon.com/128/415/415733.png",
    name: "Apple",
    date: "10/06/2025",
    price: 12,
    status: "Available"
  }
];

export default function Whislist() {
  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 16px" }}>
      <div style={{
        textAlign: "center",
        marginBottom: 18,
        marginTop: 10
      }}>
        <h2 style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 28, marginBottom: 4 }}>
          Product <span style={{ color: "#4db38c" }}>Wishlist</span>
        </h2>
        <div style={{ color: "#888", fontSize: 15 }}>
          Your product wish is our first priority.
        </div>
      </div>
      <div style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        padding: "0",
        overflow: "hidden"
      }}>
        <div style={{
          fontWeight: 700,
          color: "#2d3a4a",
          fontSize: 20,
          padding: "24px 24px 0 24px"
        }}>
          WISHLIST
        </div>
        <div style={{ padding: "0 24px 18px 24px", display: "flex", justifyContent: "flex-end" }}>
          <button
            style={{
              background: "#4db38c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 22px",
              fontWeight: 600,
              fontSize: 15,
              cursor: "pointer"
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ padding: "0 24px 24px 24px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlistData.map(item => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={tdStyle}>{item.id}</td>
                  <td style={tdStyle}>
                    <img src={item.img} alt={item.name} style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 8, background: "#fafbfc" }} />
                  </td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.date}</td>
                  <td style={tdStyle}>${item.price}</td>
                  <td style={tdStyle}>
                    {item.status === "Available" ? (
                      <span style={{ color: "#4db38c", fontWeight: 500 }}>Available</span>
                    ) : (
                      <span style={{ color: "#e57373", fontWeight: 500 }}>Out Of Stock</span>
                    )}
                  </td>
                  <td style={tdStyle}>
                    <button
                      style={{
                        background: "#4db38c",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        width: 32,
                        height: 32,
                        fontSize: 18,
                        marginRight: 8,
                        cursor: "pointer"
                      }}
                      title="Add to Cart"
                    >
                      <span role="img" aria-label="cart">🛒</span>
                    </button>
                    <button
                      style={{
                        background: "#374151",
                        color: "#fff",
                        border: "none",
                        borderRadius: 4,
                        width: 32,
                        height: 32,
                        fontSize: 18,
                        cursor: "pointer"
                      }}
                      title="Remove"
                    >
                      <span role="img" aria-label="remove">✖</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  color: "#2d3a4a",
  fontWeight: 600,
  fontSize: 15,
  padding: "12px 8px",
  background: "#fff",
  border: "none"
};

const tdStyle = {
  color: "#444",
  fontSize: 15,
  padding: "14px 8px",
  border: "none",
  textAlign: "left"
};