import Header from "./Header"
import HeroSection from "./HeroSection"
import ServiceSection from "./ServiceSection"
import Testimonials from "./Testimonials"
import Abstract from "./Arts"
import Footer from "./Footer"

function App() {

  return (
    <div className="font-barlow text-lg xl:text-xl 2xl:text-2xl">
      <Header />
      <HeroSection />
      <ServiceSection />
      <Testimonials />
      <Abstract />
      <Footer />
    </div>
  )
}

export default App
