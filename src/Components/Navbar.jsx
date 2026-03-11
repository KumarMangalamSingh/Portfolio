import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';


const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isScroll, setIsScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScroll ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-primary flex items-center">
          <span>
            <span className="text-glow text-foreground">Mangalam's</span> Portfolio
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="hover:text-primary">
              {item.name}
            </a>
          ))}
        </div>

        
        <div className="md:hidden flex items-center gap-4 cursor-pointer">
         
          <button
            onClick={() => setIsMobile(!isMobile)}
            className="text-3xl text-gray-800 focus:outline-none"
          >
            {isMobile ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
  <div className="md:hidden bg-white shadow-md border-t border-gray-200 flex flex-col justify-center items-center gap-4 py-4">
    {navItems.map((item, key) => (
      <a
        key={key}
        href={item.href}
        className="text-gray-800 hover:text-primary text-lg font-medium"
        smooth={true}
        
        onClick={() => setIsMobile(false)}
      >
        {item.name}
      </a>
    ))}
  </div>
)}

    
    </nav>
  );
}

export default Navbar;
