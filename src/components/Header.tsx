import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Trisha Cafe & Restro" className="h-10 md:h-12 w-auto" />
            <span className="font-serif text-xl md:text-2xl font-bold text-foreground">
              Trisha
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/trishacafenrestro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/trishacafenrestro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 text-primary"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow us</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
