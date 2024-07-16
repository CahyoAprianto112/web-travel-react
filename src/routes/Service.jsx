import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img/night.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </div>
  )
}

export default Service