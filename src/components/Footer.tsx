import { Leaf } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Trisha Cafe & Restro" className="h-12 w-auto" />
            <span className="font-serif text-2xl font-bold text-foreground">
              Trisha Cafe & Restro
            </span>
          </div>

          <div className="flex items-center gap-2 text-primary mb-4">
            <Leaf className="h-4 w-4" />
            <span className="font-medium">100% Pure Vegetarian</span>
          </div>

          <p className="text-muted-foreground max-w-md mb-6">
            Healthy Food Restaurant • Salads, Proteins & Weight Loss Diets • 
            Guilt-Free Chinese • North & South Indian
          </p>

          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
              Menu
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Trisha Cafe & Restro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
