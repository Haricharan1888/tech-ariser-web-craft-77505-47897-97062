import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoNew from "@/assets/logo-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-[#131921] backdrop-blur-md shadow-md"
          : "bg-[#131921]"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-400/30 transition-all" />
              <img 
                src={logoNew} 
                alt="Tech Ariser Global Logo" 
                className="h-14 w-auto relative z-10 group-hover:scale-105 transition-transform" 
              />
            </div>
            <span className="font-heading font-bold text-lg leading-tight text-white group-hover:text-cyan-400 transition-colors">
              Tech Ariser Global
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-smooth font-medium ${location.pathname === '/' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`transition-smooth font-medium ${location.pathname === '/services' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`transition-smooth font-medium ${location.pathname === '/about' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`transition-smooth font-medium ${location.pathname === '/contact' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+19452745643" className="flex items-center text-gray-300 hover:text-cyan-400 transition-smooth">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">+1 945-274-5643</span>
            </a>
            <Link to="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg">
                Get Started Today
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 bg-[#131921]">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`text-left transition-smooth font-medium px-4 py-2 ${location.pathname === '/' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className={`text-left transition-smooth font-medium px-4 py-2 ${location.pathname === '/services' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`text-left transition-smooth font-medium px-4 py-2 ${location.pathname === '/about' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className={`text-left transition-smooth font-medium px-4 py-2 ${location.pathname === '/contact' ? 'text-cyan-400' : 'text-white hover:text-cyan-400'}`}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <a href="tel:+19452745643" className="flex items-center text-gray-300 hover:text-cyan-400 transition-smooth mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-medium">+1 945-274-5643</span>
                </a>
                <Link to="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    Get Started Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
