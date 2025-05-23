import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Contact from './pages/contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import DealOfTheDay from './components/DealOfTheDay'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Header />
      <Hero />
      <Categories />
      <DealOfTheDay />
      
      <Routes>
        <Route path="/" element={
          <>
          
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> 
    </Router>
  )
}

export default App
