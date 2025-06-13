import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Checkout from './pages/Checkout'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import DealOfTheDay from './components/DealOfTheDay'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import NewArrivals from './components/NewArrivals'
import Login from './pages/login'
import Faq from './pages/faq.jsx'
import Compare from './pages/compare.jsx'
import Order from './pages/order.jsx'
import Cart from './pages/cart.jsx'
import OrderDetail from './pages/OrderDetail.jsx';
import Wishlist from './pages/wishlist.jsx'


function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Router>
      <Header onCartClick={() => setCartOpen(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <DealOfTheDay />
              <NewArrivals />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={
          <>
            <Checkout />
            <DealOfTheDay />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/order/:orderId" element={<OrderDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist/>} />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </Router>
  )
}

export default App
