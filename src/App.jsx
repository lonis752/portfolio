import "./App.scss";
import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import ReactLenis from "lenis/react";
import PortParallax from "./components/PortParallax/PortParallax";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <ReactLenis root>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <div id="About">
        <Parallax />
      </div>
      <section>About</section>
      <div id="Portfolio">
        <PortParallax />
      </div>
      <Portfolio />
      <section><Services /></section>
      <section id="Contact">contact</section>
      <Footer />
      </ReactLenis>
    </div>
  );
}

export default App;
