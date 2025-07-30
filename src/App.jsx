import React from "react";
import Navbar from "./Components/navigation_bar/navbar";
import Hero from "./Components/navigation_bar/HEro/hero";
import About from "./Components/About/About";
import Mywork from "./Components/Projects/mywork";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;