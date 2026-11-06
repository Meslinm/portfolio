import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export function App() {
  return (
    <div className="overflow-x-hidden">
      <div className="p-5 md:px-10 xl:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <Marquee />

      <About />

      <div className="p-5 md:px-10 xl:px-[15%]">
        <Experience />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;