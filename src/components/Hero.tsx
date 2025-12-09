import { Leaf } from "lucide-react";
import heroFood from "@/assets/hero-food.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroFood}
          alt="Healthy vegetarian food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/80 to-card/40" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Pure Vegetarian
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Healthy Food,
            <br />
            <span className="text-primary">Happy Soul</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Experience guilt-free dining with our curated selection of salads, 
            proteins, weight loss diets, and flavorful Indian & Chinese cuisine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Explore Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Visit Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
