import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  
  const navigate = useNavigate();
  const [shipping, setShipping] = useState("free");
  const [payment, setPayment] = useState("cod");
  const [agree, setAgree] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [deliveryComment, setDeliveryComment] = useState("");
  const [paymentComment, setPaymentComment] = useState("");
  const [checkoutOption, setCheckoutOption] = useState("guest");

  // Example cart summary (replace with real data as needed)
  const cart = [
    {
      id: 2,
      title: "Rose Gold Earring",
      desc: "200g Pack",
      qty: 1,
      price: 80,
      oldPrice: 60,
      img: "https://i.ibb.co/6b6jQw3/earring.png",
      rating: 4
    },
    {
      id: 3,
      title: "Apple",
      desc: "",
      qty: 5,
      price: 12,
      oldPrice: 10,
      img: "https://i.ibb.co/6b6jQw3/apple.png",
      rating: 3
    }
  ];
  const subTotal = cart.reduce((sum, item) => sum + item.price, 0);
  const delivery = 18.4;
  const total = subTotal + delivery;

  return (
    <div style={{ display: "flex", gap: 32, alignItems: "flex-start", maxWidth: 1300, margin: "32px auto", padding: "0 16px" }}>
      {/* Left: Summary & Methods */}
      <div style={{ flex: 1, minWidth: 350, maxWidth: 420 }}>
        {/* Summary */}
        <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: 24, marginBottom: 24 }}>
          <h3 style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 16 }}>Summary</h3>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>Sub-Total <span style={{ float: "right", color: "#2d3a4a", fontWeight: 600 }}>${subTotal.toFixed(2)}</span></div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>Delivery Charges <span style={{ float: "right", color: "#2d3a4a", fontWeight: 600 }}>${delivery.toFixed(2)}</span></div>
          <div style={{ color: "#888", fontSize: 15, marginBottom: 8 }}>
            Coupon Discount
            <span style={{ float: "right" }}>
              <a href="#" style={{ color: "#4db38c", textDecoration: "underline", fontWeight: 500 }}>Apply Discount</a>
            </span>
          </div>
          <hr style={{ margin: "16px 0" }} />
          <div style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 16, marginBottom: 16 }}>
            Total Amount <span style={{ float: "right" }}>${total.toFixed(2)}</span>
          </div>
          {/* Cart Items */}
          <div style={{ background: "#fafbfc", borderRadius: 8, padding: 12 }}>
            {cart.map(item => (
              <div key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: 12, background: "#fff", borderRadius: 8, padding: 12, boxShadow: "0 1px 4px #0001" }}>
                <img src={item.img} alt={item.title} style={{ width: 60, height: 60, objectFit: "contain", borderRadius: 8, marginRight: 14 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, color: "#2d3a4a" }}>{item.title}</div>
                  {item.desc && <div style={{ fontSize: 13, color: "#888" }}>{item.desc}</div>}
                  <div style={{ display: "flex", alignItems: "center", gap: 4, margin: "4px 0" }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: "#ffb400", fontSize: 14 }}>{i < item.rating ? "★" : "☆"}</span>
                    ))}
                  </div>
                  <div style={{ fontSize: 13, color: "#888" }}>
                    <span style={{ textDecoration: "line-through", marginRight: 6 }}>${item.oldPrice?.toFixed(2)}</span>
                    <span style={{ fontWeight: 700, color: "#2d3a4a" }}>${item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Delivery Method */}
        <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: 24, marginBottom: 24 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 8 }}>Delivery Method</div>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 12 }}>Please select the preferred shipping method to use on this order.</div>
          <div style={{ display: "flex", gap: 24, marginBottom: 8 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: shipping === "free" ? "#4db38c" : "#2d3a4a" }}>
              <input type="radio" checked={shipping === "free"} onChange={() => setShipping("free")} />
              Free Shipping <span style={{ fontWeight: 400, color: "#888", fontSize: 13 }}>Rate - $0.00</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: shipping === "flat" ? "#4db38c" : "#2d3a4a" }}>
              <input type="radio" checked={shipping === "flat"} onChange={() => setShipping("flat")} />
              Flat Rate <span style={{ fontWeight: 400, color: "#888", fontSize: 13 }}>Rate - $5.00</span>
            </label>
          </div>
          <div style={{ fontWeight: 500, color: "#2d3a4a", margin: "12px 0 4px" }}>Add Comments About Your Order</div>
          <textarea
            placeholder="Comments"
            value={deliveryComment}
            onChange={e => setDeliveryComment(e.target.value)}
            style={{ width: "100%", minHeight: 48, border: "1px solid #e0e0e0", borderRadius: 6, padding: 10, fontSize: 15, marginBottom: 0 }}
          />
        </div>
        {/* Payment Method */}
        <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: 24 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 8 }}>Payment Method</div>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 12 }}>Please select the preferred payment method to use on this order.</div>
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: payment === "cod" ? "#4db38c" : "#2d3a4a", marginBottom: 8 }}>
            <input type="radio" checked={payment === "cod"} onChange={() => setPayment("cod")} />
            Cash On Delivery
          </label>
          <div style={{ fontWeight: 500, color: "#2d3a4a", margin: "12px 0 4px" }}>Add Comments About Your Order</div>
          <textarea
            placeholder="Comments"
            value={paymentComment}
            onChange={e => setPaymentComment(e.target.value)}
            style={{ width: "100%", minHeight: 48, border: "1px solid #e0e0e0", borderRadius: 6, padding: 10, fontSize: 15, marginBottom: 0 }}
          />
          <div style={{ marginTop: 16 }}>
            <label style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
              <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
              I have read and agree to the <span style={{ color: "#4db38c", fontWeight: 500, textDecoration: "underline" }}>Terms & Conditions</span>.
            </label>
          </div>
        </div>
      </div>
      {/* Right: New Customer */}
      <div style={{ flex: 1, minWidth: 350, maxWidth: 600 }}>
        <div style={{ background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001", padding: 24 }}>
          <div style={{ fontWeight: 700, color: "#2d3a4a", marginBottom: 16 }}>New Customer</div>
          <div style={{ fontWeight: 600, color: "#2d3a4a", marginBottom: 10 }}>Checkout Options</div>
          <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: checkoutOption === "guest" ? "#4db38c" : "#2d3a4a" }}>
              <input type="radio" checked={checkoutOption === "guest"} onChange={() => setCheckoutOption("guest")} />
              Guest Account
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: checkoutOption === "register" ? "#4db38c" : "#2d3a4a" }}>
              <input type="radio" checked={checkoutOption === "register"} onChange={() => setCheckoutOption("register")} />
              Register Account
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, color: checkoutOption === "login" ? "#4db38c" : "#2d3a4a" }}>
              <input type="radio" checked={checkoutOption === "login"} onChange={() => setCheckoutOption("login")} />
              Login Account
            </label>
          </div>
          <div style={{ color: "#888", fontSize: 14, marginBottom: 24 }}>
            By creating an account you will be able to shop faster, be up to date on an order’s status, and keep track of the orders you have previously made.
          </div>
          <button style={{ background: "#4db38c", color: "#fff", border: "none", borderRadius: 6, padding: "10px 32px", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
}