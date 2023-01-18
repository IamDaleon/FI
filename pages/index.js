import ByBrand from "./components/ByBrand";
import ByCategory from "./components/ByCategory";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import './bloat.js'

export default function Home() {
  return (
    <>
    <div className='p-5 bg-black'>
      <Navbar />
      </div>
      <Slider />
      <Cta />
      <ByBrand />
      <Testimonials />
      <ByCategory />
      <Footer />
    </>
  )
}
