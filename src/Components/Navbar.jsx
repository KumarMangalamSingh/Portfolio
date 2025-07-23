import React, { useEffect, useState } from 'react'

const navItems=[
    {name:"Home",href:"#hero"},
    {name:"About",href:"#about"},
    {name:"Skills",href:"#skills"},
    {name:"Projects",href:"#projects"},
    {name:"Contact",href:"#contact"}
]
function Navbar() {
    const [isScroll,setIsScroll]=useState(false)
    const[ismobile,setIsMobile]=useState(false);
    useEffect(()=>{
    const handelScroll=()=>{
        setIsScroll(window.scrollY>10)
    }
    window.addEventListener("scroll",handelScroll)
    },[])
  return (
    <nav
  className={`fixed w-full z-40 transition-all duration-300 ${
    isScroll ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
  }`}
>
        <div className='container flex items-center justify-between'>
        <a href="#"className=" text-3xl font-bold text-primary flex items-center">
            <span><span className='text-glow text-foreground'>Mangalam's</span>  Portfolio</span>
        </a>
        {/* desktop view */}
        <div className='hidden md:flex space-x-8'>
            {navItems.map((item,key)=>(
            <a key={key} href={item.href} className='hover:text-primary'>{item.name}</a>
            )
            )}
        </div>
        
        
        </div>
      
    </nav>
  )
}

export default Navbar
