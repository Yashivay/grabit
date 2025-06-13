import { useState } from "react";

const products = [
  {
    image: "https://cdn.pixabay.com/photo/2017/01/06/19/15/perfume-1959350_1280.jpg",
    name: "Long lasting perfume",
    category: "perfume",
    rating: 5,
    reviews: 654,
    availability: "Out Off Stock",
    available: false,
    location: "in Store, Online",
    brand: "Bhisma Organice",
    sku: "55555",
    quantity: "1 Pack",
    weight: "5 pcs",
    description: "Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/03/23/19/53/hawaii-shirt-1278402_1280.jpg",
    name: "Men's stylish printed shirt",
    category: "men's wear",
    rating: 4,
    reviews: 654,
    availability: "Available",
    available: true,
    location: "Online",
    brand: "Bhisma Organice",
    sku: "24433",
    quantity: "1 Pack",
    weight: "1 pcs",
    description: "Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    image: "https://cdn.pixabay.com/photo/2016/07/22/09/59/blueberries-1534494_1280.jpg",
    name: "Blue berry",
    category: "Fresh Fruits",
    rating: 3,
    reviews: 654,
    availability: "Out Of Stock",
    available: false,
    location: "Online",
    brand: "Bhisma Organice",
    sku: "23456",
    quantity: "1 Pack",
    weight: "500 g",
    description: "Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];

const fields = [
  { label: "Product Image", key: "image" },
  { label: "Name", key: "name" },
  { label: "Category", key: "category" },
  { label: "Ratings", key: "rating" },
  { label: "Availability", key: "availability" },
  { label: "location", key: "location" },
  { label: "Brand", key: "brand" },
  { label: "SKU", key: "sku" },
  { label: "Quantity", key: "quantity" },
  { label: "Weight", key: "weight" },
  { label: "Description", key: "description" }
];

export default function Compare() {
  const [compareList, setCompareList] = useState(products);

  const handleRemove = (idx) => {
    setCompareList(compareList.filter((_, i) => i !== idx));
  };

  const renderRating = (rating, reviews) => (
    <span>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ color: i <= rating ? "#ff9800" : "#ccc", fontSize: 18, marginRight: 1 }}>★</span>
      ))}
      <span style={{ color: "#888", fontSize: 14, marginLeft: 6 }}>({reviews} Review)</span>
    </span>
  );

  return (
    <div style={{ maxWidth: 1200, margin: "40px auto", padding: "0 16px" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "#fff",
        boxShadow: "0 2px 12px #0001"
      }}>
        <tbody>
          {fields.map((field, rowIdx) => (
            <tr key={field.key} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{
                fontWeight: rowIdx === 0 ? 600 : 500,
                color: "#2d3a4a",
                padding: "18px 16px",
                minWidth: 160,
                verticalAlign: rowIdx === 0 ? "top" : "middle",
                background: "#fafbfc"
              }}>
                {field.label}
              </td>
              {compareList.map((product, colIdx) => (
                <td key={colIdx} style={{
                  textAlign: rowIdx === 0 ? "center" : "left",
                  padding: "18px 16px",
                  borderLeft: "1px solid #f0f0f0",
                  position: "relative",
                  verticalAlign: rowIdx === 0 ? "top" : "middle"
                }}>
                  {rowIdx === 0 ? (
                    <>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: 120,
                          height: 120,
                          objectFit: "contain",
                          background: "#fff",
                          borderRadius: 8,
                          margin: "0 auto",
                          display: "block"
                        }}
                      />
                      <button
                        onClick={() => handleRemove(colIdx)}
                        style={{
                          position: "absolute",
                          top: 12,
                          right: 18,
                          background: "none",
                          border: "none",
                          fontSize: 22,
                          color: "#888",
                          cursor: "pointer"
                        }}
                        aria-label="Remove"
                        title="Remove"
                      >×</button>
                    </>
                  ) : field.key === "rating" ? (
                    renderRating(product.rating, product.reviews)
                  ) : field.key === "availability" ? (
                    <span style={{
                      color: product.available ? "#4db38c" : "#e57373",
                      fontWeight: 500
                    }}>
                      {product.availability}
                    </span>
                  ) : (
                    <span style={{ color: "#444", fontSize: 15 }}>
                      {product[field.key]}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}