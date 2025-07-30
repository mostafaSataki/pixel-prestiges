import { Link } from "react-router-dom";
import { Code2, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">TechCorp</span>
            </div>
            <p className="text-neutral-foreground/80 mb-6 max-w-md">
              Leading IT solutions provider, transforming businesses through innovative technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-foreground/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-neutral-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-neutral-foreground/80 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-neutral-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-neutral-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@techcorp.com</span>
              </li>
              <li className="flex items-center space-x-2 text-neutral-foreground/80">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-neutral-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-foreground/20 pt-8 mt-8 text-center">
          <p className="text-neutral-foreground/60">
            © 2024 TechCorp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;