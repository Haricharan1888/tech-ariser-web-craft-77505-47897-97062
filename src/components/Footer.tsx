import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoNew from "@/assets/logo-new.png";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#131921] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoNew} 
                alt="Tech Ariser Global Logo" 
                className="h-12 w-auto" 
              />
              <div>
                <span className="font-heading font-bold text-lg text-cyan-400 block">Tech Ariser Global</span>
                <span className="text-xs font-semibold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-md inline-block mt-1">
                  An E-Verify Company
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Empowering businesses through innovative IT consulting solutions and digital transformation expertise.
            </p>
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Social Info</h3>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/tech-ariser-global/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/people/Tech-Ariser-Global/61581742127820/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`text-sm transition-smooth ${location.pathname === '/' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`text-sm transition-smooth ${location.pathname === '/about' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`text-sm transition-smooth ${location.pathname === '/services' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`text-sm transition-smooth ${location.pathname === '/contact' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className={`text-sm transition-smooth ${location.pathname === '/privacy-policy' ? 'text-cyan-400' : 'text-gray-400 hover:text-cyan-400'}`}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Network Design & Implementation</li>
              <li>Cloud Computing & Migration</li>
              <li>Cybersecurity Assessments</li>
              <li>IT Strategy & Roadmap</li>
              <li>Managed Services & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-cyan-400" />
                <span className="text-gray-400">
                  4400 Bandera Drive<br />
                  Prosper, TX, USA
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 text-cyan-400" />
                <a
                  href="tel:+19452745643"
                  className="text-gray-400 hover:text-cyan-400 transition-smooth"
                >
                  +1 945-274-5643
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 text-cyan-400" />
                <a
                  href="mailto:hr@techariser.com"
                  className="text-gray-400 hover:text-cyan-400 transition-smooth"
                >
                  hr@techariser.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tech Ariser Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
