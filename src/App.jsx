import "./App.scss";
import Parallax from "./components/Parallax/Parallax";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <div id="About">
        <Parallax />
      </div>
      <section>About</section>
      <div id="Portfolio">
      </div>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
