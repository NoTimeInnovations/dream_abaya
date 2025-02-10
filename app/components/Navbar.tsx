import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close mobile menu
  };

  return (
    <nav className="bg-[#242424] p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#cea36a] text-2xl font-bold z-50">
          Dream Abaya
        </Link>
        
        {/* Hamburger Button */}
        <button 
          className="lg:hidden z-50 relative w-10 h-10 text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
          <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white hover:text-[#cea36a]">
            Home
          </Link>
          <button 
            onClick={scrollToProducts} 
            className="text-white hover:text-[#cea36a]"
          >
            Products
          </button>
          <Link to="/about" className="text-white hover:text-[#cea36a]">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-[#cea36a]">
            Contact
          </Link>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-90 transition-opacity duration-300 ease-in-out lg:hidden ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          style={{ zIndex: 40 }}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              to="/" 
              className="text-white hover:text-[#cea36a] text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={scrollToProducts}
              className="text-white hover:text-[#cea36a] text-2xl"
            >
              Products
            </button>
            <Link 
              to="/about" 
              className="text-white hover:text-[#cea36a] text-2xl"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-[#cea36a] text-2xl"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 