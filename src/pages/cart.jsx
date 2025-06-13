import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Rose Gold Earring",
      price: 80,
      qty: 1,
      img: "https://cdn-icons-png.flaticon.com/128/3082/3082035.png"
    },
    {
      id: 2,
      name: "Apple",
      price: 12,
      qty: 1,
      img: "https://cdn-icons-png.flaticon.com/128/415/415733.png"
    }
  ]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [discount, setDiscount] = useState(0);

  const delivery = 18.4;
  const subTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = (subTotal + delivery - discount).toFixed(2);

  const handleQty = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const handleApplyDiscount = () => {
    setDiscount(10); // Example: $10 discount
  };

  return (
    <div style={{ maxWidth: 1300, margin: "40px auto", display: "flex", gap: 40, alignItems: "flex-start", padding: "0 16px" }}>
      {/* Summary Card */}
      <div style={{
        flex: "0 0 370px",
        background: "#fafbfc",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        padding: "28px 24px",
        fontSize: 16,
        minWidth: 320,
        alignSelf: "flex-start"
      }}>
        <div style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 20, marginBottom: 2 }}>Summary</div>
        <div style={{ color: "#4db38c", fontWeight: 600, fontSize: 15, marginBottom: 18 }}>Estimate Shipping</div>
        <div style={{ color: "#888", fontSize: 14, marginBottom: 16 }}>
          Enter your destination to get a shipping estimate
        </div>
        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Country <span style={{ color: "#e57373" }}>*</span></div>
        <select
          value={country}
          onChange={e => setCountry(e.target.value)}
          style={inputStyle}
        >
          <option value="">Country</option>
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
        </select>
        <div style={{ fontWeight: 600, fontSize: 15, margin: "18px 0 6px 0" }}>State/Province</div>
        <input
          value={state}
          onChange={e => setState(e.target.value)}
          placeholder="State/Province"
          style={inputStyle}
        />
        <div style={{ fontWeight: 600, fontSize: 15, margin: "18px 0 6px 0" }}>Zip/Postal Code</div>
        <input
          value={zip}
          onChange={e => setZip(e.target.value)}
          placeholder="Zip/Postal Code"
          style={inputStyle}
        />
        <div style={{ borderTop: "1px solid #eee", margin: "22px 0 0 0", paddingTop: 18, }}>
          <div style={summaryRow}>
            <span>Sub-Total</span>
            <span style={{ fontWeight: 600 }}>${subTotal.toFixed(2)}</span>
          </div>
          <div style={summaryRow}>
            <span>Delivery Charges</span>
            <span style={{ fontWeight: 600 }}>${delivery.toFixed(2)}</span>
          </div>
          <div style={summaryRow}>
            <span>Coupon Discount</span>
            <span>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#4db38c",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: 15,
                  padding: 0
                }}
                onClick={handleApplyDiscount}
                disabled={!!discount}
              >
                Apply Discount
              </button>
              {discount > 0 && (
                <span style={{ color: "#e57373", marginLeft: 8 }}>-${discount}</span>
              )}
            </span>
          </div>
          <div style={{ ...summaryRow, fontWeight: 700, fontSize: 18, marginTop: 18 }}>
            <span>Total Amount</span>
            <span style={{ color: "#2d3a4a" }}>${total}</span>
          </div>
        </div>
      </div>
      {/* Cart Table */}
      <div style={{ flex: 1, minWidth: 400 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#fff" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #eaeaea" }}>
              <th style={thStyle}>Product</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Quantity</th>
              <th style={thStyle}>Total</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                <td style={{ ...tdStyle, display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={item.img} alt={item.name} style={{ width: 38, height: 38, objectFit: "contain", borderRadius: 8, background: "#fafbfc" }} />
                  {item.name}
                </td>
                <td style={tdStyle}>${item.price}</td>
                <td style={tdStyle}>
                  <button style={qtyBtnStyle} onClick={() => handleQty(item.id, -1)}>-</button>
                  <span style={{ margin: "0 10px", minWidth: 18, display: "inline-block", textAlign: "center" }}>{item.qty}</span>
                  <button style={qtyBtnStyle} onClick={() => handleQty(item.id, 1)}>+</button>
                </td>
                <td style={tdStyle}>${(item.price * item.qty).toFixed(2)}</td>
                <td style={tdStyle}>
                  <button
                    onClick={() => handleRemove(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#2d3a4a",
                      fontSize: 20,
                      cursor: "pointer"
                    }}
                    title="Remove"
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
         <div style={{ marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
           <a href="/" style={{ color: "#2d3a4a", textDecoration: "underline", fontWeight: 500 }}>Continue Shopping</a>
          <button
            style={{
              background: "#4db38c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 28px",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer"
            }}
          >
            Check Out
          </button> 
        </div> 
      </div>
    </div>
  );}

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 6,
  border: "1px solid #eaeaea",
  fontSize: 15,
  marginBottom: 0,
  background: "#fff",
  marginTop: 2
};

const summaryRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontSize: 15,
  margin: "8px 0"
};

const thStyle = {
  textAlign: "left",
  color: "#2d3a4a",
  fontWeight: 600,
  fontSize: 15,
  padding: "12px 8px",
  background: "#fafbfc",
  border: "none"
};

const tdStyle = {
  color: "#444",
  fontSize: 15,
  padding: "14px 8px",
  border: "none"
};

const qtyBtnStyle = {
  background: "#fafbfc",
  border: "1px solid #eaeaea",
  borderRadius: 4,
  width: 28,
  height: 28,
  fontSize: 18,
  color: "#2d3a4a",
  cursor: "pointer",
  fontWeight: 600
};