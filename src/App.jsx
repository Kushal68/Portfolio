import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="min-h-screen bg-primary text-light">
      <Navbar />
      <main className="relative pt-20">
        <div className="mx-auto w-full max-w-7xl">
          <Home />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
