import Footer from "../components/Footer/Footer";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import Services from "../sections/Services/Services";
import Skills from "../sections/Skills/Skills";

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills/>
      <Services/>
      <Projects />
      <Contact  />
      <Footer />
    </main>
  );
};

export default Home;