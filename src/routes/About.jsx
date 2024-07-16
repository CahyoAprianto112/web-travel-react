
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img/night.jpg";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About