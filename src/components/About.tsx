import { Salad, Heart, Utensils, Leaf } from "lucide-react";

const features = [
  {
    icon: Salad,
    title: "Fresh Salads",
    description: "Nutrient-rich salads crafted for your health goals",
  },
  {
    icon: Heart,
    title: "Weight Loss Diets",
    description: "Calorie-conscious meals that don't compromise on taste",
  },
  {
    icon: Utensils,
    title: "Guilt-Free Chinese",
    description: "Your favorite Indo-Chinese made healthy",
  },
  {
    icon: Leaf,
    title: "100% Pure Veg",
    description: "All dishes prepared with fresh vegetarian ingredients",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            About Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Light & Lean, Strong & Clean
          </h2>
          <p className="text-muted-foreground text-lg">
            At Trisha Cafe & Restro, we believe that healthy food should be delicious. 
            Our menu features a perfect blend of nutrition and flavor, from protein-packed 
            salads to comforting North & South Indian dishes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-background hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
                <feature.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
