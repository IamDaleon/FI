import ByBrand from "./components/ByBrand";
import ByCategory from "./components/ByCategory";
import ByType from "./components/ByType";
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
      <ByType />
      <Cta />
      <ByBrand />
      <Testimonials />
      <ByCategory />
      <Footer />
    </>
  )
}
