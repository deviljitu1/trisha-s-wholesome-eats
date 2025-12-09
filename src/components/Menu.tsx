import { useState } from "react";

type MenuItem = {
  name: string;
  price: number;
  info?: string;
};

type MenuCategory = {
  name: string;
  tagline?: string;
  items: MenuItem[];
};

const menuData: MenuCategory[] = [
  {
    name: "Weight Loss",
    tagline: "Light & Lean, Strong & Clean",
    items: [
      { name: "Sprout Corn Salad", price: 79, info: "C-9, F-0, Protein-4, CAL-52" },
      { name: "Alia Bhatt Beetroot Salad", price: 79, info: "C-13, F-4, Protein-10, CAL-128" },
      { name: "Sprout Bhel", price: 89 },
      { name: "Makhana Bhel", price: 89 },
      { name: "Dry Fruit Sprout Corn Salad", price: 99, info: "C-20, F-4, Protein-8, CAL-148" },
      { name: "Greek Salad", price: 129 },
      { name: "Russian Salad", price: 149 },
      { name: "Veg Sautéed", price: 169, info: "C-24, F-4, Protein-4, CAL-148" },
    ],
  },
  {
    name: "High on Protein",
    tagline: "Fuel your day with protein-rich delights",
    items: [
      { name: "Chickpea Salad", price: 89, info: "C-34, F-10, Protein-17, CAL-294" },
      { name: "Peanut Masala Chat", price: 89, info: "C-11, F-23, Protein-14, CAL-316" },
      { name: "Paneer Sprout Salad", price: 119 },
      { name: "Super Protein Salad", price: 149, info: "Soya+ Paneer +Chickpeas" },
      { name: "Sprout Tikki", price: 149 },
      { name: "Paneer Chickpea Salad", price: 179, info: "C-24, F-9, Protein-18, CAL-249" },
      { name: "Sautéed Paneer", price: 199, info: "C-20, F-8, Protein-13, CAL-204" },
    ],
  },
  {
    name: "Starters",
    tagline: "Flavor-packed beginnings",
    items: [
      { name: "Honey Chilli Potato", price: 149 },
      { name: "Soya Chunk Chilli", price: 149 },
      { name: "Veg Mozzarella Sticks", price: 149 },
      { name: "Paneer Chilli", price: 149 },
      { name: "Crispy Corn", price: 179 },
      { name: "Veg Manchurian", price: 199 },
      { name: "Paneer Manchurian", price: 219 },
      { name: "Paneer 65", price: 219 },
    ],
  },
  {
    name: "Noodles & Rice",
    tagline: "Stir-fried perfection",
    items: [
      { name: "Hakka Noodles", price: 149 },
      { name: "Veg Chowmein", price: 179 },
      { name: "Schezwan Noodles", price: 179 },
      { name: "Singapore Noodles", price: 179 },
      { name: "Veg Fried Rice", price: 149 },
      { name: "Schezwan Rice", price: 179 },
      { name: "Singapore Rice", price: 179 },
      { name: "Triple Rice", price: 219 },
    ],
  },
  {
    name: "Soup",
    tagline: "Warm & comforting",
    items: [
      { name: "Veg Noodle Soup", price: 119 },
      { name: "Tangy Tomato Soup", price: 139 },
      { name: "Sweet Corn Soup", price: 149 },
      { name: "Cream of Veg Soup", price: 189 },
      { name: "Paneer Coconut Milk Soup", price: 199 },
    ],
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Menu
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Delicious & Nutritious
          </h2>
          <p className="text-muted-foreground text-lg">
            From protein-rich salads to guilt-free Chinese, discover meals crafted for your wellness journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              {menuData[activeCategory].name}
            </h3>
            {menuData[activeCategory].tagline && (
              <p className="text-primary mt-2">{menuData[activeCategory].tagline}</p>
            )}
          </div>

          <div className="grid gap-4">
            {menuData[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-card rounded-lg hover:shadow-md transition-shadow"
              >
                <div>
                  <h4 className="font-medium text-foreground">{item.name}</h4>
                  {item.info && (
                    <p className="text-sm text-muted-foreground mt-1">{item.info}</p>
                  )}
                </div>
                <span className="font-serif text-lg font-bold text-primary">
                  ₹{item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
