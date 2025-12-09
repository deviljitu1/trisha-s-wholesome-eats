import { MapPin, Clock, Instagram, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Visit Us
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Find Your Table
          </h2>
          <p className="text-muted-foreground text-lg">
            We'd love to welcome you. Drop by for a healthy, delicious meal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-card rounded-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
              <MapPin className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Location
            </h3>
            <p className="text-muted-foreground">
              Visit our cozy restaurant for dine-in or takeaway
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
              <Clock className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Hours
            </h3>
            <p className="text-muted-foreground">
              Open Daily<br />
              11:00 AM - 10:00 PM
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent mb-5">
              <Phone className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Contact
            </h3>
            <p className="text-muted-foreground">
              Reach out to us for reservations
            </p>
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/trishacafenrestro/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Follow us on Instagram
          </a>
          <p className="mt-4 text-muted-foreground">
            @trishacafenrestro • 406 followers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
