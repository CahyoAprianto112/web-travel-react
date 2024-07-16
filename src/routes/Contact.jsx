import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/img/2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </div>

  )
}

export default Contact