import React from "react"
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from "../components/Technologies"
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <div>
      <NavBar />
      <Landing />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}
