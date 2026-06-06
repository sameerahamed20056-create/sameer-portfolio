import Navbar from "./Navbar.jsx"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer.jsx"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"



function App() {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      once:false
    })
  },[]);

  return (
    <>
    <Navbar />
     <Hero />
     <About />
     <Projects />
     <Contact />
     <Footer />
     
    </>
  )
}

export default App
