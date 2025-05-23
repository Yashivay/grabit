import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const categories = [
  {
    name: "Vegetables",
    items: 548,
    discount: "15%",
    color: "#ffe5e5",
    icon: "🌽"
  },
  {
    name: "Dairy & Milk",
    items: 48,
    discount: "10%",
    color: "#ffe5fa",
    icon: "🥛"
  },
  {
    name: "Snack & Spice",
    items: 59,
    discount: "",
    color: "#e5eaff",
    icon: "🍟"
  },
  {
    name: "Juice & Drinks",
    items: 845,
    discount: "",
    color: "#ffffe5",
    icon: "🥤"
  },
  {
    name: "Seafood",
    items: 652,
    discount: "",
    color: "#ffeede",
    icon: "🦐"
  },
  {
    name: "Fast Food",
    items: 320,
    discount: "20%",
    color: "#e5ffe5",
    icon: "🧁"
  }
];

export default function Categories() {
  return (
    <section className="categories-section" style={{ margin: "40px 0" }}>
        <div className="container">
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Categories</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
        }}
        style={{ padding: "0 24px" }}
      >
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx}>
            <div
              style={{
                background: cat.color,
                borderRadius: 12,
                padding: 16,
                minHeight: 180,
                boxShadow: "0 4px 16px #0001",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                margin: "12px 0"
              }}
            >
              {cat.discount && (
                <span style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "#4db38c",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 4,
                  padding: "2px 8px"
                }}>{cat.discount}</span>
              )}
              <div style={{ fontSize: 48, color: "#4db38c", marginBottom: 12 }}>{cat.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a4a", marginBottom: 4 }}>{cat.name}</div>
              <div style={{ color: "#888", fontSize: 15 }}>{cat.items} Items</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}