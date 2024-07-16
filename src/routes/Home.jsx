
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB9MHxwaG90by1wTWdlfHx8fGVufDB8fHx8&auto-format&fit-crop&w=870&q=80"
                title="Your Journey Your History"
                text="Choose Your Favourite Destination."
                buttonText="Travel Plan"
                url="/"
                btnClass="show"
            />
            <Destination />
            <Trip limit={3} />
            <Footer />
        </div>
    )
}

export default Home