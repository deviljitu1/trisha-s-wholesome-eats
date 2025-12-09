import exteriorImage from "@/assets/restaurant-exterior.png";
import interiorImage from "@/assets/restaurant-interior.png";

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Our Space
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            A Cozy Retreat
          </h2>
          <p className="text-muted-foreground text-lg">
            Step into our warm and inviting space designed for comfort and memorable dining experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-xl group">
            <img
              src={exteriorImage}
              alt="Trisha Cafe & Restro exterior"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <span className="text-card font-medium">Our Entrance</span>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl group">
            <img
              src={interiorImage}
              alt="Trisha Cafe & Restro interior"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <span className="text-card font-medium">Cozy Interior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
