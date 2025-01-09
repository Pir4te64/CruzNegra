import AnimatedCursor from "react-animated-cursor";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import ContacSection from "./components/US/ContacSection";
import SectionBellow from "./components/US/SectionBelow";
import SectionUs from "./components/US/SectionUs";
import ServicesSection from "./components/US/ServicesSection";
import Projects from "./components/Works/Projects";
import SmoothScroll from "./components/Smooth";
import ScrollToTopButton from "./components/ScrollToTop";

function App() {
  return (
    <SmoothScroll>
      <AnimatedCursor
        innerSize={20}
        outerSize={50}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar />
      <SectionUs />
      <ServicesSection />
      {/* <Projects /> */}
      <SectionBellow />
      <ContacSection />
      {/* <Clients /> */}
      <Footer />
      <ScrollToTopButton />
    </SmoothScroll>
  );
}

export default App;
