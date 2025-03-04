import "./App.scss";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
        <Parallax type={"About"} />
      <section>About</section>
      <section id="Portfolio">
        <Parallax type={"Portfolio"} />
      </section>
      <section>Project1</section>
      <section>Project2</section>
      <section>Project3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
