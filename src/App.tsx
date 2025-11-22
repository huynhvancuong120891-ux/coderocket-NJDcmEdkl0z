import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <WhyChooseUs />
      <AboutUs />
      <Footer />
    </div>
  );
}
export default App;