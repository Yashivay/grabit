import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import NewArrivals from './NewArrivals';


const deals = [
  {
    tag: "NEW",
    tagColor: "#4db38c",
    image: "https://i.ibb.co/0j1Yw8s/jackfruit.png",
    category: "Foods",
    title: "Stick Fiber Masala Magic",
    rating: 3,
    price: 45,
    oldPrice: 50,
    unit: "2pack"
  },
  {
    tag: "NEW",
    tagColor: "#4db38c",
    image: "https://i.ibb.co/6b6jQw3/cherry.png",
    category: "Fresh Fruit",
    title: "Natural Hub Cherry Karonda",
    rating: 4,
    price: 49,
    oldPrice: 65,
    unit: "1kg"
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/3yQw2wM/mango-juice.png",
    category: "Foods",
    title: "Fresh Mango Juice Pack",
    rating: 2,
    price: 20,
    oldPrice: 21,
    unit: ""
  },
  {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/ginger.png",
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    rating: 4,
    price: 2,
    oldPrice: 3,
    unit: "100g"
  },
  {
    tag: "SALE",
    tagColor: "#ff6b81",
    image: "https://i.ibb.co/0j1Yw8s/trail-mix.png",
    category: "Dried Fruits",
    title: "Mixed Nuts Berries Pack",
    rating: 4,
    price: 45,
    oldPrice: 56,
    unit: ""
  },
   {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/ginger.png",
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    rating: 4,
    price: 2,
    oldPrice: 3,
    unit: "100g"
  },
   {
    tag: "",
    tagColor: "",
    image: "https://i.ibb.co/4Z1k5yF/ginger.png",
    category: "Tuber Root",
    title: "Fresh Organic Ginger Pack",
    rating: 4,
    price: 2,
    oldPrice: 3,
    unit: "100g" 
  }
];

function StarRating({ value }) {
  return (
    <div style={{ color: "#ffb400", fontSize: 18 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i}>{i <= value ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

export default function DealOfTheDay() {
    
  return (
    <section style={{ margin: "48px 0" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontWeight: 700, fontSize: 32, color: "#2d3a4a", margin: 0 }}>
              Day Of The <span style={{ color: "#4db38c" }}>Deal</span>
            </h2>
            <div style={{ color: "#888", marginTop: 4, fontSize: 16 }}>
              Don’t wait. The time will never be just right.
            </div>
          </div>
          <div style={{
            background: "#f8f9fa",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 700,
            fontSize: 18,
            color: "#2d3a4a",
            marginTop: 12
          }}>
            <span style={{ color: "#4db38c" }}>25</span> Days <span>23 : 42 : 41</span>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={18}
          slidesPerView={5}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
          }}
          style={{ marginTop: 32, padding: "0 12px" }}
        >
          {deals.map((deal, idx) => (
            <SwiperSlide key={idx}>
              <div style={{
                background: "#fff",
                borderRadius: 12,
                boxShadow: "0 4px 16px #0001",
                border: "1px solid #f0f0f0",
                display: "flex",
                flexDirection: "column",
                minHeight: 420,
                overflow: "hidden"
              }}>
                <div style={{ position: "relative", padding: 24, textAlign: "center", minHeight: 220 }}>
                  {deal.tag && (
                    <span style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: deal.tagColor,
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: 14,
                      borderRadius: 4,
                      padding: "2px 12px"
                    }}>{deal.tag}</span>
                  )}
                  <img src={deal.image} alt={deal.title} style={{ maxHeight: 150, maxWidth: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ borderTop: "1px solid #f0f0f0", padding: 24, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ color: "#888", fontSize: 15, marginBottom: 4 }}>{deal.category}</div>
                  <div style={{ fontWeight: 700, fontSize: 18, color: "#2d3a4a", marginBottom: 8 }}>{deal.title}</div>
                  <StarRating value={deal.rating} />
                  <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontWeight: 700, color: "#2d3a4a", fontSize: 18 }}>${deal.price.toFixed(2)}</span>
                    <span style={{ color: "#888", textDecoration: "line-through", fontSize: 15 }}>${deal.oldPrice.toFixed(2)}</span>
                    <span style={{ color: "#888", fontSize: 15 }}>{deal.unit}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <NewArrivals/>
    </section>
  );
}