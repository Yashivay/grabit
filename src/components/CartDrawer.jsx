import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const drawerRef = useRef();
  const navigate = useNavigate();

  // Example cart data (replace with your state/props as needed)
  const [cartItems, setCartItems] = useState([
    {
      id: 2,
      title: "Rose Gold Earring",
      desc: "200g Pack",
      qty: 1,
      price: 80,
      img: "https://i.ibb.co/6b6jQw3/earring.png"
    },
    {
      id: 3,
      title: "Apple",
      desc: "",
      qty: 5,
      price: 12,
      img: "https://i.ibb.co/6b6jQw3/apple.png"
    }
  ]);

  // Prevent background scroll when cart is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Animation: add/remove class for open/close
  useEffect(() => {
    if (!drawerRef.current) return;
    if (open) {
      drawerRef.current.classList.add("cart-drawer-open");
      drawerRef.current.classList.remove("cart-drawer-close");
    } else {
      drawerRef.current.classList.remove("cart-drawer-open");
      drawerRef.current.classList.add("cart-drawer-close");
    }
  }, [open]);

  // Counter handlers
  const handleQty = (id, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  // Remove item handler
  const handleRemove = id => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subTotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const vat = subTotal * 0.2;
  const total = subTotal + vat;

  return (
    <>
      {(open || drawerRef.current?.classList.contains("cart-drawer-close")) && (
        <div
          className={`cart-drawer-backdrop${open ? " open" : ""}`}
          onClick={onClose}
        />
      )}
      <div
        ref={drawerRef}
        className={`cart-drawer${open ? " cart-drawer-open" : " cart-drawer-close"}`}
        tabIndex={-1}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div style={{ padding: 24, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <b style={{ fontSize: 16, color: "#2d3a4a" }}>My Cart</b>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer" }}>×</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 16 }}>
          {cartItems.map(item => (
            <div
              key={item.id}
              style={{
                background: "#fafbfc",
                borderRadius: 8,
                marginBottom: 18,
                padding: 16,
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                boxShadow: "0 1px 4px #0001",
                position: "relative"
              }}
            >
              <img src={item.img} alt={item.title} style={{ width: 60, height: 60, objectFit: "contain", borderRadius: 8 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 500, color: "#2d3a4a" }}>{item.title}</div>
                {item.desc && <div style={{ fontSize: 14, color: "#888", marginBottom: 2 }}>{item.desc}</div>}
                <div style={{ fontSize: 14, color: "#888" }}>{item.qty} pcs</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
                  <button
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid #eee",
                      background: "#fff",
                      borderRadius: 4,
                      fontSize: 18,
                      cursor: "pointer",
                      color: "#888"
                    }}
                    onClick={() => handleQty(item.id, -1)}
                  >-</button>
                  <span style={{ minWidth: 18, textAlign: "center", fontWeight: 500 }}>{item.qty}</span>
                  <button
                    style={{
                      width: 28,
                      height: 28,
                      border: "1px solid #eee",
                      background: "#fff",
                      borderRadius: 4,
                      fontSize: 18,
                      cursor: "pointer",
                      color: "#888"
                    }}
                    onClick={() => handleQty(item.id, 1)}
                  >+</button>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: "#ff6b81",
                    fontSize: 18,
                    cursor: "pointer",
                    alignSelf: "flex-end"
                  }}
                  onClick={() => handleRemove(item.id)}
                  aria-label="Remove"
                >✕</button>
                <div style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 16, marginTop: 24 }}>${item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #eee", padding: 24, marginTop: "auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, color: "#888", fontSize: 15 }}>
            <span>Sub-Total :</span>
            <span style={{ fontWeight: 700, color: "#2d3a4a" }}>${subTotal.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, color: "#888", fontSize: 15 }}>
            <span>VAT (20%) :</span>
            <span style={{ fontWeight: 700, color: "#2d3a4a" }}>${vat.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontWeight: 700, fontSize: 17, marginBottom: 16, color: "#2d3a4a" }}>
            <span>Total :</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <button style={{ flex: 1, background: "#2d3a4a", color: "#fff", border: "none", borderRadius: 6, padding: "10px 0", fontWeight: 700, cursor: "pointer" }}>VIEW CART</button>
            <button
              style={{ flex: 1, background: "#4db38c", color: "#fff", border: "none", borderRadius: 6, padding: "10px 0", fontWeight: 700, cursor: "pointer" }}
              onClick={() => {
                onClose();
                navigate("/checkout");
              }}
            >CHECKOUT</button>
          </div>
        </div>
      </div>
      {/* Styles for animation */}
      <style>
        {`
        .cart-drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s linear;
          pointer-events: none;
        }
        .cart-drawer-backdrop.open {
          opacity: 1;
          pointer-events: auto;
        }
        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 400px;
          max-width: 100vw;
          height: 100%;
          background: #fff;
          box-shadow: -2px 0 16px #0002;
          display: flex;
          flex-direction: column;
          z-index: 1001;
          transform: translateX(100%);
          transition: transform 0.3s linear;
        }
        .cart-drawer.cart-drawer-open {
          transform: translateX(0);
          pointer-events: auto;
        }
        .cart-drawer.cart-drawer-close {
          transform: translateX(100%);
          pointer-events: none;
        }
        `}
      </style>
    </>
  );
}