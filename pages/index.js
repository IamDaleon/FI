import ByBrand from "./components/ByBrand";
import ByCategory from "./components/ByCategory";
import ByType from "./components/ByType";
import Cta from "./components/Cta";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
// import './bloat.js'

export default function Home() {
  return (
    <>
      <Slider />
      <ByType />
      <Cta />
      <ByBrand />
      <Testimonials />
      <ByCategory />
    </>
  )
}
