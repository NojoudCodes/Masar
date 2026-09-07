import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Network from "../components/sections/Network";
import WorkProcess from "../components/sections/WorkProcess";
import Contact from "../components/sections/Contact";
import Testimonial from "../components/sections/Testimonial";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Network />
      <WorkProcess />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}
