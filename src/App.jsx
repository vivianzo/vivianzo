import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-red-400 selection:text-white font-times">
      <div className="fixed top-0 -z-10 h-full w-full bg-gradient-to-t from-red-50 to-red-200">
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        {/* <About /> */}
        {/*<Technologies />*/}
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App
