import Navbar from "./Components/Nav/Navbar";
import Home from "./Components/Sections/Home";
import FeatureServices from "./Components/Sections/FeatureServices";
import About from "./Components/Sections/About";
import Services from "./Components/Sections/Services";
import Footer from "./components/Nav/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <FeatureServices />
      <Services />
      <About />
      <Footer />
    </>
  );
}

export default App;
