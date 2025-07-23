import React from 'react'
import ThemeToggle from '../../Components/ThemeToggle'
import{StarBackground} from '../../Components/StarBackground'
import Navbar from '../../Components/Navbar'
import Hero from '../../Components/Hero'
import About from '../../Components/About'
import {Skills} from '../../Components/Skills'
import { Project } from '../../Components/Project'
import { Contact } from '../../Components/Contact'
import { Footer } from '../../Components/Footer'

function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground
    overflow-x-hidden '>
      {/* Theme Toggle */}
         <ThemeToggle/>

      {/* Background Effects */}
      <StarBackground/>
      {/* Navbar  */}
      <Navbar/>
      {/* Main Content */}
      <Hero/>
      <About/>
     <Skills/>
      <Project/>
      <Contact/>
      {/* Footer */}
      <Footer/>


    </div>
  )
}

export default Home
