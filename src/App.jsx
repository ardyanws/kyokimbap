import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Popular from './components/Popular';
import Testimonial from './components/TestimonialSlider';

import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Popular />
      <Testimonial />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/menu" Component={Menu} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
