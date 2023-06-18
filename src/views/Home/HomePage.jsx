import React from "react";
// import "./HomePage.css";
import Header from '../../components/header/header.jsx';
import Hero from "../../components/Hero/Hero.jsx";
import Footer from "../../components/footer/footer.jsx";
import Container from "../../components/Card_container/Card_Container.jsx";



function HomePage() {

  return (
    <>
      <Header/>
      <Hero/>
      <Container/>
      <Footer/>
    </>
        
     
  );
}

export default HomePage;