import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import Services from "../components/layout/Services";
import Network from "../components/layout/Network";
import WorkProcess from "../components/layout/WorkProcess";
import Contact from "../components/layout/Contact";
import Testimonial from "../components/layout/Testimonial";
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
