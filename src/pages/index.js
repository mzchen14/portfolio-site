import React from "react"
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'
import Technologies from "../components/Technologies"
import Contact from '../components/Contact'
import Navigation from "../components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
export default function Home() {
  return (
    <div>
      <Navigation />
      <Landing />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  )
}
