import { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header className="header">
            <div className="container">
                <div className="header-top" style={{ textAlign: 'center' }}>
                    <div className="header-contact">
                        <span>📞 +91 987 654 3210</span>
                        <span>🟢 +91 987 654 3210</span>
                    </div>
                    <div className="header-center">
                        World's Fastest Online Shopping Destination
                    </div>
                    <div className="header-links">
                        <span>Help?</span>
                        <span>Track Order?</span>
                        <span>English ▼</span>
                        <span>Dollar ▼</span>
                    </div>
                </div>
                <div className="header-main">
                    <div className="header-logo" style={{ textAlign: 'center' }}>
                        <span className="logo-icon">🛍️</span>
                        <span className="logo-text"><b>Grab</b><span style={{ color: '#4db38c' }}>it</span></span>
                    </div>
                    <div className="header-search">
                        <input type="text" placeholder="Search Products..." />
                        <button className="search-btn">🔍</button>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>                    <div className="header-user">
                        <span className="user-account">👤<span className="user-label"> Account<br />LOGIN</span></span>
                        <span className="user-wishlist">♡<span className="user-label"> Wishlist<br />3-ITEMS</span></span>
                        <span className="user-cart">🛒<span className="user-label"> Cart<br />3-ITEMS</span></span>
                    </div>
                </div>
                <div className="header-nav">
                    <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                    <div className={`nav-content${menuOpen ? ' open' : ''}`}>
                        <button className="categories-btn">▦ All Categories ▼</button>
                        <nav className="main-nav">
                            <div className="dropdown">
                                <span className="dropdown-toggle">Home ▼</span>
                                <div className="dropdown-menu">
                                    <Link to="/">Home</Link>
                                    <Link to="/about">About</Link>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </div>
                            <span>Categories ▼</span>
                            <span>Products ▼</span>
                            <span>Blog ▼</span>
                            <span>Pages ▼</span>
                            <span>⚡ Offers</span>
                        </nav>
                        <button className="location-btn">📍 New York ▼</button>
                    </div>
                </div>
            </div>
        </header>
    )
}
