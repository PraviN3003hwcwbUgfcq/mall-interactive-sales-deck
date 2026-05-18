import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/hooks/use-lenis";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhyProperty } from "@/components/site/WhyProperty";
import { StickyShowcase } from "@/components/site/StickyShowcase";
import { LuxuryMarquee } from "@/components/site/LuxuryMarquee";
import { Events } from "@/components/site/Events";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import retailImg from "@/assets/retail.jpg";
import diningImg from "@/assets/dining.jpg";
import attractionsImg from "@/assets/attractions.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <WhyProperty />
      <StickyShowcase
        id="retail"
        index="03"
        label="Retail Experience"
        heading="1,200 stores. One curated journey."
        intro="An architecturally choreographed retail flow — from emerging designers to global heritage maisons — engineered for discovery, dwell time and conversion."
        image={retailImg}
        items={[
          { title: "Fashion Avenue", tag: "Luxury Wing", copy: "The highest-grossing luxury floor on the planet — 150+ maisons under one vaulted gold canopy." },
          { title: "The Galleria", tag: "Premium Lifestyle", copy: "Contemporary fashion, beauty, and lifestyle anchored by destination flagships." },
          { title: "The Souk", tag: "Heritage", copy: "Modern interpretation of the gold and jewellery souk — a category we own globally." },
          { title: "Chinatown", tag: "Cultural District", copy: "A new immersive district celebrating East Asian retail, beauty and dining." },
        ]}
      />
      <LuxuryMarquee />
      <StickyShowcase
        id="dining"
        index="05"
        label="Dining & Lifestyle"
        heading="A culinary capital, indoors."
        intro="From three-Michelin chefs to neighbourhood favourites — 200+ restaurants and cafés define the rhythm of the day."
        image={diningImg}
        align="right"
        items={[
          { title: "Signature Restaurants", tag: "Fine Dining", copy: "Marquee chef collaborations and global culinary debuts with skyline views over the Burj." },
          { title: "The Promenade", tag: "Waterfront", copy: "Open-air dining along the Dubai Fountain — the city's most sought-after table." },
          { title: "Concept Cafés", tag: "Lifestyle", copy: "Roastery debuts, dessert flagships and influencer-loved openings that drive social reach." },
          { title: "Private Dining", tag: "VIP", copy: "Bookable suites for partner hospitality, brand dinners and investor evenings." },
        ]}
      />
      <StickyShowcase
        id="attractions"
        index="06"
        label="Attractions & Entertainment"
        heading="A theme park inside a mall."
        intro="Attractions that extend dwell time well beyond retail — turning every visit into a full-day experience."
        image={attractionsImg}
        items={[
          { title: "Dubai Aquarium & Underwater Zoo", tag: "Iconic", copy: "10M-litre tank — one of the largest suspended aquariums in the world. A non-negotiable stop for every visitor." },
          { title: "VR Park", tag: "Tech", copy: "75,000 ft² of virtual and augmented reality attractions designed by global studios." },
          { title: "Reel Cinemas", tag: "Premium", copy: "26 screens including the region's largest IMAX and exclusive Platinum suites." },
          { title: "KidZania", tag: "Family", copy: "Award-winning edutainment city — a magnet for resident families and tourist parents alike." },
        ]}
      />
      <Events />
      <FinalCTA />
      <Footer />
    </main>
  );
}
