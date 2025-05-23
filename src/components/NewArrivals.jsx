import { useState } from 'react';

const categories = [
  { label: 'ALL', value: 'all' },
  { label: 'SNACK & SPICES', value: 'snack' },
  { label: 'FRUITS', value: 'fruits' },
  { label: 'VEGETABLES', value: 'vegetables' },
];

const products = [
  {
    tag: "SALE",
    tagColor: "#ff6b81",
    image: "https://i.ibb.co/0j1Yw8s/trail-mix.png",
    category: "Dried Fruits",
    title: "Mixed Nuts Berries Pack",
    rating: 3,
    price: 45,
    oldPrice: 56,
    type: "snack"
  },
  {
    tag: "SALE",
    tagColor: "#ff6b81",
    image: "https://i.ibb.co/0j1Yw8s/almonds.png",
    category: "Cookies",
    title: "Multi Grain Combo Cookies",
    rating: 4,
    price: 25,
    oldPrice: 30,
    type: "snack"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/3yQw2wM/mango-juice.png",
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 2,
    price: 46,
    oldPrice: 65,
    type: "fruits"
  },
  {
    tag: "SALE",
    tagColor: "#ff6b81",
    image: "https://i.ibb.co/0j1Yw8s/dates.png",
    category: "Dried Fruits",
    title: "Dates Value Fresh Pouch",
    rating: 2,
    price: 78,
    oldPrice: 85,
    type: "snack"
  },
  {
    tag: "NEW",
    tagColor: "#4db38c",
    image: "https://i.ibb.co/0j1Yw8s/jackfruit.png",
    category: "Foods",
    title: "Stick Fiber Masala Magic",
    rating: 4,
    price: 45,
    oldPrice: 50,
    type: "vegetables"
  },
  {
    tag: "NEW",
    tagColor: "#4db38c",
    image: "https://i.ibb.co/6b6jQw3/cherry.png",
    category: "Fresh Fruit",
    title: "Natural Hub Cherry Karonda",
    rating: 5,
    price: 49,
    oldPrice: 65,
    type: "fruits"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/3yQw2wM/mango-juice.png",
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 4,
    price: 20,
    oldPrice: 21,
    type: "fruits"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/ginger.png",
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    rating: 2,
    price: 2,
    oldPrice: 3,
    type: "vegetables"
  },
  {
    tag: "NEW",
    tagColor: "#4db38c",
    image: "https://i.ibb.co/0j1Yw8s/chips.png",
    category: "Foods",
    title: "Natural Hub Cherry Karonda",
    rating: 4,
    price: 49,
    oldPrice: 65,
    type: "snack"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/3yQw2wM/mango-juice.png",
    category: "Fresh Fruit",
    title: "Fresh Mango Juice Pack",
    rating: 3,
    price: 20,
    oldPrice: 21,
    type: "fruits"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/lychee.png",
    category: "Fresh Fruit",
    title: "Fresh Lychee",
    rating: 4,
    price: 20,
    oldPrice: 21,
    type: "fruits"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/lychee.png",
    category: "Fresh Fruit",
    title: "Fresh Lychee",
    rating: 4,
    price: 20,
    oldPrice: 21,
    type: "fruits"
  }
];

function StarRating({ value }) {
  return (
    <div style={{ color: "#ffb400", fontSize: 16 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i}>{i <= value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function NewArrivals() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(p => p.type === filter);

  return (
    <section style={{ margin: "48px 0" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: 28, color: "#2d3a4a", margin: 0 }}>
              New <span style={{ color: "#4db38c" }}>Arrivals</span>
            </h2>
            <div style={{ color: "#4db38c", marginTop: 4, fontSize: 14 }}>
              Shop online for new arrivals and get free shipping!
            </div>
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                style={{
                  background: "none",
                  border: "none",
                  color: filter === cat.value ? "#4db38c" : "#2d3a4a",
                  fontWeight: filter === cat.value ? 700 : 500,
                  fontSize: 15,
                  cursor: "pointer",
                  borderBottom: filter === cat.value ? "2px solid #4db38c" : "2px solid transparent",
                  padding: "0 0 4px 0"
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 32,
            marginTop: 40
          }}
        >
          {filteredProducts.map((prod, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 16px #0001",
                border: "1px solid #f0f0f0",
                display: "flex",
                flexDirection: "column",
                minHeight: 320,
                overflow: "hidden"
              }}
            >
              <div style={{ position: "relative", padding: 24, textAlign: "center", minHeight: 180 }}>
                {prod.tag && (
                  <span style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: prod.tagColor,
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 14,
                    borderRadius: 4,
                    padding: "2px 12px"
                  }}>{prod.tag}</span>
                )}
                <img src={prod.image} alt={prod.title} style={{ maxHeight: 120, maxWidth: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ borderTop: "1px solid #f0f0f0", padding: 20, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ color: "#888", fontSize: 14, marginBottom: 4 }}>{prod.category}</div>
                <div style={{ fontWeight: 700, fontSize: 16, color: "#2d3a4a", marginBottom: 8 }}>{prod.title}</div>
                <StarRating value={prod.rating} />
                <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 16 }}>${prod.price.toFixed(2)}</span>
                  <span style={{ color: "#888", textDecoration: "line-through", fontSize: 14 }}>${prod.oldPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}