import 'bootstrap/dist/css/bootstrap.min.css'

export default function Hero() {
return (
    <section className="hero-section">
        <div className="container">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="src/assets/images/1.jpg" className="d-block w-100" alt="Banner 1" />
                </div>
                <div className="carousel-item">
                    <img src="src/assets/images/2.jpg" className="d-block w-100" alt="Banner 2" />
                </div>               
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    </section>
);
}