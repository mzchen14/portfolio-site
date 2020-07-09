import React from "react"
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from "../components/Technologies"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Technologies />
    </div>
  )
}
