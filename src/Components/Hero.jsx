import React from 'react'
import { ArrowDown } from "lucide-react";

function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-14">

      <div className="container max-w-4xl mx-auto text-center z-10 space-y-6">
        <h1 className=' text-4xl md:text-6xl font-bold'>Hi,I'm Kumar <span className='text-primary opacity-0 animate-fade-in-delay-1'>Mangalam</span></h1>
        </div>
      <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 mt-7 font-sm">  Adventurous with code and fueled by endless curiosity, <br /> I build beautiful front-end experiences and dive fearlessly into back-end systems.<br />My journey now brings me to the edge of tomorrow—exploring the wonders of AI  <br /> and machine learning—where creativity meets technology, and every project is a new world to discover.
      </p>
      <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce mt-5">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </div>
  )
}

export default Hero
