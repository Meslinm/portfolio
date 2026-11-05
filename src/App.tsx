import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export function App() {
  return (
    <div>
      <div className="p-5 md:px-10 xl:px-[15%]">
        <Navbar />
        <Home />
      </div>

      <About />

      <div className="p-5 md:px-10 xl:px-[15%]">
        <Experience />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
