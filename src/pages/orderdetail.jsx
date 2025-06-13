import { useNavigate } from "react-router-dom";

const orderInfo = {
  name: "John Smith",
  address: "My Street, Big town BG23 4YZ",
  postalCode: "395004",
  country: "Armenia",
  state: "Syunik Province",
  city: "Shaghat",
};

const orderItems = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/ginger-1238257_1280.jpg",
    name: "Fresh Organic Ginger Pack",
    date: "03/06/2025",
    price: "$3",
  },
  {
    id: 2,
    image: "https://cdn.pixabay.com/photo/2017/01/20/15/06/cherry-1991878_1280.jpg",
    name: "Natural Hub Cherry Karonda",
    date: "03/06/2025",
    price: "$65",
  },
  {
    id: 3,
    image: "https://cdn.pixabay.com/photo/2017/07/16/10/43/juice-2500167_1280.jpg",
    name: "Fresh Mango juice pack",
    date: "03/06/2025",
    price: "$21",
  },
];

export default function OrderDetail() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 1250, margin: "40px auto", display: "flex", gap: 32, padding: "0 16px" }}>
      {/* Address Info */}
      <div style={{
        flex: "0 0 320px",
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        padding: "28px 24px",
        fontSize: 16,
        minWidth: 260,
        alignSelf: "flex-start"
      }}>
        <div style={{ marginBottom: 10 }}>
          <b>Name</b> : <span style={{ color: "#444" }}>{orderInfo.name}</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <b>Address</b> : <span style={{ color: "#444" }}>{orderInfo.address}</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <b>PostalCode</b> : <span style={{ color: "#444" }}>{orderInfo.postalCode}</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <b>Country</b> : <span style={{ color: "#444" }}>{orderInfo.country}</span>
        </div>
        <div style={{ marginBottom: 10 }}>
          <b>State</b> : <span style={{ color: "#4db38c" }}>{orderInfo.state}</span>
        </div>
        <div>
          <b>City</b> : <span style={{ color: "#444" }}>{orderInfo.city}</span>
        </div>
      </div>
      {/* Order Items Table */}
      <div style={{
        flex: 1,
        background: "#fff",
        borderRadius: 8,
        boxShadow: "0 2px 12px #0001",
        minWidth: 400,
        overflow: "hidden"
      }}>
        <div style={{
          padding: "22px 24px 0 24px",
          fontWeight: 600,
          color: "#2d3a4a",
          fontSize: 18,
          letterSpacing: 0.2,
          display: "flex",
          alignItems: "center"
        }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "#4db38c",
              color: "#fff",
              border: "none",
              borderRadius: 6,
              padding: "6px 16px",
              fontWeight: 500,
              fontSize: 18,
              cursor: "pointer",
              marginRight: 18,
              display: "flex",
              alignItems: "center"
            }}
            aria-label="Back"
            title="Back"
          >
            &#8592;
          </button>
          ORDER ITEMS
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 18 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eaeaea" }}>
                <th style={thStyle}>ID</th>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Date</th>
                <th style={thStyle}>Price</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map(item => (
                <tr key={item.id} style={{ borderBottom: "1px solid #f5f5f5" }}>
                  <td style={tdStyle}>{item.id}</td>
                  <td style={tdStyle}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: 48, height: 48, objectFit: "contain", borderRadius: 8, background: "#fafbfc" }}
                    />
                  </td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.date}</td>
                  <td style={tdStyle}>{item.price}</td>
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
  background: "#fafbfc",
  border: "none"
};

const tdStyle = {
  color: "#444",
  fontSize: 15,
  padding: "14px 8px",
  border: "none"
};