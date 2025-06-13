import { useNavigate } from "react-router-dom";
import { useState } from "react";

// thStyle is defined only once to avoid redeclaration errors
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

const viewBtnStyle = {
  background: "#4db38c",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "7px 18px",
  fontWeight: 500,
  fontSize: 15,
  cursor: "pointer"
};

const popupColStyle = {
  background: "#fafbfc",
  borderRadius: 8,
  flex: 1,
  minWidth: 180,
  padding: "24px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const popupTitleStyle = {
  fontWeight: 500,
  color: "#888",
  fontSize: 17,
  marginBottom: 6,
  textAlign: "center"
};

const popupValueStyle = {
  fontWeight: 500,
  color: "#2d3a4a",
  fontSize: 17,
  textAlign: "center"
};

export default function Order() {
  const navigate = useNavigate();
  const [popupOrder, setPopupOrder] = useState(null);

  const pendingOrders = [
    {
      id: "47394",
      shipping: "free",
      quantity: 3,
      date: "03/06/2025",
      price: "$106.8",
      status: "Pending",
    },
  ];

  const completeOrders = [
    {
      id: "65820",
      shipping: "free",
      quantity: 3,
      date: "03/06/2025",
      price: "$194.4",
      status: "Completed",
      grasshoppers: "v534hb",
      expectedDate: "03/06/2025",
    },
    {
      id: "31264",
      shipping: "free",
      quantity: 3,
      date: "03/06/2025",
      price: "$181.2",
      status: "Completed",
      grasshoppers: "v534hb",
      expectedDate: "03/06/2025",
    },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
      <h2 style={{ textAlign: "center", fontWeight: 700, color: "#2d3a4a", marginBottom: 4 }}>
        Product <span style={{ color: "#4db38c" }}>Order List</span>
      </h2>
      <div style={{ textAlign: "center", color: "#888", marginBottom: 32, fontSize: 15 }}>
        Your product Order is our first priority.
      </div>

      {/* Pending Orders */}
      <div style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        marginBottom: 48,
        padding: "0 0 24px 0"
      }}>
        <div style={{
          padding: "22px 24px 0 24px",
          fontWeight: 600,
          color: "#2d3a4a",
          fontSize: 16,
          letterSpacing: 0.2
        }}>
          PANDING ORDERS
          <button
            style={{
              float: "right",
              background: "#4db38c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "8px 22px",
              fontWeight: 500,
              fontSize: 15,
              cursor: "pointer"
            }}
          >
            Shop Now
          </button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 18 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                <th style={thStyle}>Orders ID</th>
                <th style={thStyle}>Shipping</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order) => (
                <tr key={order.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={tdStyle}>{order.id}</td>
                  <td style={tdStyle}>{order.shipping}</td>
                  <td style={tdStyle}>{order.quantity}</td>
                  <td style={tdStyle}>{order.date}</td>
                  <td style={tdStyle}>{order.price}</td>
                  <td style={{ ...tdStyle, color: "#4db38c", fontWeight: 500 }}>{order.status}</td>
                  <td style={tdStyle}>
                    <button style={viewBtnStyle} onClick={() => navigate(`/order/${order.id}`)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Complete Orders */}
      <div style={{
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        padding: "0 0 24px 0"
      }}>
        <div style={{
          padding: "22px 24px 0 24px",
          fontWeight: 600,
          color: "#2d3a4a",
          fontSize: 16,
          letterSpacing: 0.2
        }}>
          COMPLETE ORDERS
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 18 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                <th style={thStyle}>Orders ID</th>
                <th style={thStyle}>Shipping</th>
                <th style={thStyle}>Quantity</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Price</th>
                <th style={thStyle}>Status</th>
                <th style={thStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {completeOrders.map((order) => (
                <tr key={order.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={tdStyle}>{order.id}</td>
                  <td style={tdStyle}>{order.shipping}</td>
                  <td style={tdStyle}>{order.quantity}</td>
                  <td style={tdStyle}>{order.date}</td>
                  <td style={tdStyle}>{order.price}</td>
                  <td style={{ ...tdStyle, color: "#e57373", fontWeight: 500 }}>{order.status}</td>
                  <td style={tdStyle}>
                    <button
                      style={viewBtnStyle}
                      onClick={() => setPopupOrder(order)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup for Complete Order Details */}
      {popupOrder && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(44,52,62,0.18)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <div style={{
            background: "#fff",
            borderRadius: 8,
            minWidth: 350,
            maxWidth: 600,
            width: "100%",
            padding: "32px 0 32px 0",
            boxShadow: "0 2px 16px #0002",
            display: "flex",
            gap: 24,
            justifyContent: "center",
            position: "relative"
          }}>
            <button
              onClick={() => setPopupOrder(null)}
              style={{
                position: "absolute",
                top: 16,
                right: 24,
                background: "none",
                border: "none",
                fontSize: 22,
                color: "#444",
                cursor: "pointer"
              }}
              aria-label="Close"
              title="Close"
            >×</button>
            <div style={popupColStyle}>
              <div style={popupTitleStyle}>Order</div>
              <div style={popupValueStyle}>#{popupOrder.id}</div>
            </div>
            <div style={popupColStyle}>
              <div style={popupTitleStyle}>Grasshoppers</div>
              <div style={popupValueStyle}>{popupOrder.grasshoppers}</div>
            </div>
            <div style={popupColStyle}>
              <div style={popupTitleStyle}>Expected Date</div>
              <div style={popupValueStyle}>{popupOrder.expectedDate}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}