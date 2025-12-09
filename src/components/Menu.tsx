import { useState } from "react";

// Import all menu images
import sproutCornSalad from "@/assets/menu/sprout-corn-salad.jpg";
import beetrootSalad from "@/assets/menu/beetroot-salad.jpg";
import sproutBhel from "@/assets/menu/sprout-bhel.jpg";
import makhanaBhel from "@/assets/menu/makhana-bhel.jpg";
import greekSalad from "@/assets/menu/greek-salad.jpg";
import russianSalad from "@/assets/menu/russian-salad.jpg";
import vegSauteed from "@/assets/menu/veg-sauteed.jpg";
import dryFruitSalad from "@/assets/menu/dry-fruit-salad.jpg";
import chickpeaSalad from "@/assets/menu/chickpea-salad.jpg";
import paneerDish from "@/assets/menu/paneer-dish.jpg";
import honeyChilliPotato from "@/assets/menu/honey-chilli-potato.jpg";
import hakkaNoodles from "@/assets/menu/hakka-noodles.jpg";
import friedRice from "@/assets/menu/fried-rice.jpg";
import cornSoup from "@/assets/menu/corn-soup.jpg";
import dosa from "@/assets/menu/dosa.jpg";
import pizza from "@/assets/menu/pizza.jpg";
import thali from "@/assets/menu/thali.jpg";
import coldCoffee from "@/assets/menu/cold-coffee.jpg";

type MenuItem = {
  name: string;
  price: number;
  info?: string;
  image?: string;
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
      { name: "Sprout Corn Salad", price: 79, info: "C-9, F-0, Protein-4, CAL-52", image: sproutCornSalad },
      { name: "Alia Bhatt Beetroot Salad", price: 79, info: "C-13, F-4, Protein-10, CAL-128", image: beetrootSalad },
      { name: "Sprout Bhel", price: 89, image: sproutBhel },
      { name: "Makhana Bhel", price: 89, image: makhanaBhel },
      { name: "Dry Fruit Sprout Corn Salad", price: 99, info: "C-20, F-4, Protein-8, CAL-148", image: dryFruitSalad },
      { name: "Greek Salad", price: 129, image: greekSalad },
      { name: "Russian Salad", price: 149, image: russianSalad },
      { name: "Veg Sautéed", price: 169, info: "C-24, F-4, Protein-4, CAL-148", image: vegSauteed },
      { name: "Italian Bhel", price: 179 },
      { name: "Waldorf Salad", price: 179 },
      { name: "Roasted Beetroot Salad", price: 179 },
      { name: "Veg Sautéed (Feta & Mash)", price: 219, info: "Feta salad and mash potato" },
    ],
  },
  {
    name: "High Protein",
    tagline: "Fuel your day with protein-rich delights",
    items: [
      { name: "Chickpea Salad", price: 89, info: "C-34, F-10, Protein-17, CAL-294", image: chickpeaSalad },
      { name: "Peanut Masala Chat", price: 89, info: "C-11, F-23, Protein-14, CAL-316", image: makhanaBhel },
      { name: "Paneer Sprout Salad", price: 119, image: paneerDish },
      { name: "Super Protein Salad", price: 149, info: "Soya+ Paneer +Chickpeas", image: chickpeaSalad },
      { name: "Sprout Tikki", price: 149 },
      { name: "Paneer Chickpea Salad", price: 179, info: "C-24, F-9, Protein-18, CAL-249" },
      { name: "Sprout Tikki Chat", price: 179 },
      { name: "Sautéed Paneer", price: 199, info: "C-20, F-8, Protein-13, CAL-204", image: paneerDish },
      { name: "Chickpea Paneer Tikki", price: 199 },
    ],
  },
  {
    name: "Starters",
    tagline: "Flavor-packed beginnings",
    items: [
      { name: "Honey Chilli Potato", price: 149, image: honeyChilliPotato },
      { name: "Soya Chunk Chilli", price: 149 },
      { name: "Veg Mozzarella Sticks", price: 149 },
      { name: "Paneer Chilli", price: 149, image: paneerDish },
      { name: "Crispy Corn", price: 179 },
      { name: "Veg Crispy", price: 199 },
      { name: "Veg Manchurian", price: 199 },
      { name: "Idli Chilli", price: 199 },
      { name: "Aloo Pollichathu", price: 199 },
      { name: "Paneer Manchurian", price: 219, image: paneerDish },
      { name: "Paneer Majestic", price: 219 },
      { name: "Paneer Lapeta", price: 219 },
      { name: "Paneer Basanti", price: 219 },
      { name: "Paneer Hongkong", price: 219 },
      { name: "Paneer 65", price: 219 },
      { name: "Apple Pollichathu", price: 219 },
      { name: "Cheese Corn Balls", price: 219 },
      { name: "Paneer Cream Chilli", price: 239 },
      { name: "Pineapple Pollichathu", price: 249 },
      { name: "Paneer Pollichathu", price: 249 },
    ],
  },
  {
    name: "Soup",
    tagline: "Warm & comforting",
    items: [
      { name: "Veg Noodle Soup", price: 119, image: cornSoup },
      { name: "Tangy Tomato Soup", price: 139 },
      { name: "Sweet Corn Soup", price: 149, image: cornSoup },
      { name: "Cream of Veg Soup", price: 189 },
      { name: "Paneer Coconut Milk Soup", price: 199 },
    ],
  },
  {
    name: "Noodles",
    tagline: "Stir-fried perfection",
    items: [
      { name: "Hakka Noodles", price: 149, image: hakkaNoodles },
      { name: "Veg Chowmein", price: 179 },
      { name: "Schezwan Noodles", price: 179 },
      { name: "Singapore Noodles", price: 179 },
      { name: "Manchurian Noodles", price: 179 },
      { name: "Chilli Garlic Noodles", price: 179 },
      { name: "Hong Kong Noodles", price: 199 },
      { name: "Triple Noodles", price: 219 },
      { name: "Malaysian Noodles", price: 229 },
    ],
  },
  {
    name: "Rice",
    tagline: "Flavorful rice bowls",
    items: [
      { name: "Veg Fried Rice", price: 149, image: friedRice },
      { name: "Mexican Rice", price: 159 },
      { name: "Mix Fried Rice", price: 169 },
      { name: "Schezwan Rice", price: 179, image: friedRice },
      { name: "Singapore Rice", price: 179 },
      { name: "Hong Kong Rice", price: 199 },
      { name: "Paneer Fried Rice", price: 199 },
      { name: "Manchurian Rice", price: 199 },
      { name: "Triple Rice", price: 219 },
      { name: "Combo Rice", price: 219 },
      { name: "Malaysian Rice", price: 229 },
    ],
  },
  {
    name: "Sliders",
    tagline: "Mini burgers, maximum flavor",
    items: [
      { name: "Mix Veg Sliders", price: 319 },
      { name: "Chilli Paneer Sliders", price: 339 },
      { name: "Paneer Makhanwala Slider", price: 349 },
      { name: "Paneer Kadhai Slider", price: 349 },
    ],
  },
  {
    name: "South Indian",
    tagline: "Flavors of South & Punjab",
    items: [
      { name: "Plain Dosa", price: 89, image: dosa },
      { name: "Masala Dosa", price: 109, image: dosa },
      { name: "Butter Masala Dosa", price: 129 },
      { name: "Mysore Masala Dosa", price: 139 },
      { name: "Paneer Dosa", price: 149 },
      { name: "Idli Sambar (2 Pcs)", price: 79 },
      { name: "Medu Vada (2 Pcs)", price: 89 },
      { name: "Uttapam", price: 109 },
      { name: "Rava Dosa", price: 119 },
    ],
  },
  {
    name: "Pizza & Pasta",
    tagline: "Cheesy, saucy cravings",
    items: [
      { name: "Margherita Pizza", price: 199, image: pizza },
      { name: "Veg Supreme Pizza", price: 249, image: pizza },
      { name: "Paneer Tikka Pizza", price: 279 },
      { name: "Farmhouse Pizza", price: 259 },
      { name: "Penne Arrabiata", price: 189 },
      { name: "White Sauce Pasta", price: 199 },
      { name: "Pink Sauce Pasta", price: 209 },
      { name: "Alfredo Pasta", price: 219 },
    ],
  },
  {
    name: "Thalis & Curries",
    tagline: "Nourishing classics",
    items: [
      { name: "Veg Thali", price: 199, image: thali },
      { name: "Paneer Thali", price: 249, image: thali },
      { name: "Special Thali", price: 299 },
      { name: "Dal Tadka", price: 149 },
      { name: "Dal Makhani", price: 179 },
      { name: "Paneer Butter Masala", price: 219 },
      { name: "Kadhai Paneer", price: 219 },
      { name: "Shahi Paneer", price: 229 },
      { name: "Palak Paneer", price: 209 },
      { name: "Mix Veg", price: 169 },
    ],
  },
  {
    name: "Beverages",
    tagline: "Sips, Coffee & Chill",
    items: [
      { name: "Fresh Lime Soda", price: 49 },
      { name: "Fresh Lime Water", price: 39 },
      { name: "Cold Coffee", price: 89, image: coldCoffee },
      { name: "Cold Coffee with Ice Cream", price: 119, image: coldCoffee },
      { name: "Mango Shake", price: 99 },
      { name: "Banana Shake", price: 89 },
      { name: "Oreo Shake", price: 109 },
      { name: "Chocolate Shake", price: 109 },
      { name: "Strawberry Shake", price: 99 },
      { name: "Masala Chai", price: 29 },
      { name: "Green Tea", price: 49 },
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
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-3 md:px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              {menuData[activeCategory].name}
            </h3>
            {menuData[activeCategory].tagline && (
              <p className="text-primary mt-2">{menuData[activeCategory].tagline}</p>
            )}
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {menuData[activeCategory].items.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
              >
                {/* Image */}
                <div className="aspect-square overflow-hidden bg-muted">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-accent/50">
                      <span className="text-4xl">🍽️</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-foreground leading-tight">
                      {item.name}
                    </h4>
                    <span className="font-serif text-lg font-bold text-primary whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                  {item.info && (
                    <p className="text-xs text-muted-foreground mt-2">
                      {item.info}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
