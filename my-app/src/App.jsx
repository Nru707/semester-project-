import React from "react"; 
import Navbar from "./components/Navbar/navbar"; 
import Hero from "./components/Hero/hero";
import Products from "./components/Products/products";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/footer"
const App =() =>{

  React.useEffect(() =>{ 
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[]);
  return <div>

    <Navbar/>
    <Hero/>
    <Products/>
    <Footer/>
  </div>

};

export default App;
