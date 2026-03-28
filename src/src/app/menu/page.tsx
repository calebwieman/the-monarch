import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const heroImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=85";

const menuSections = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "To Begin",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=1200&q=85",
    items: [
      {
        name: "Burrata on Toast",
        description:
          "Toasted focaccia, kaleido tomato medley, pesto, balsamic glaze",
        price: "16",
        tags: ["Vegetarian"],
      },
      {
        name: "Shrimp Cocktail",
        description:
          "1/2 dozen cold boiled shrimp served with our cocktail sauce",
        price: "18",
        tags: [],
      },
      {
        name: "Crab Cake",
        description:
          "Jumbo lump crab meat, fresh herbs, and breadcrumbs pan seared and served on a bed of mixed greens with a remoulade",
        price: "24",
        tags: [],
      },
      {
        name: "Potato Mille-Feuille",
        description:
          "Thinly scalloped layers of potatoes dipped in duck fat, gently pan-fried and topped with crème fraiche, scallions, truffle oil, and minced steak",
        price: "22",
        tags: [],
      },
    ],
  },
  {
    id: "soups-salads",
    title: "Soup & Salad",
    subtitle: "From the Bowl",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=85",
    items: [
      {
        name: "Mesclun",
        description:
          "Locally sourced mixed greens with walnuts, dried cranberries, and feta cheese with raspberry vinaigrette",
        price: "12",
        tags: [],
      },
      {
        name: "Crispy Brussels Sprouts",
        description:
          "Fried brussels sprouts tossed with dried cranberries, bacon, goat cheese, and a balsamic citrus reduction",
        price: "16",
        tags: [],
      },
      {
        name: "Caesar",
        description:
          "Romaine lettuce, cracked pepper, shaved parmesan, and crispy croutons tossed in a house-made Caesar dressing",
        price: "14",
        tags: [],
      },
      {
        name: "Crab Bisque",
        description:
          "Rich, creamy bisque featuring jumbo lump crab meat, perfectly seasoned with a touch of heat",
        price: "9",
        tags: [],
      },
      {
        name: "Loaded Potato Soup",
        description:
          "Creamy loaded soup with chunks of potatoes, bacon, and cheese",
        price: "6",
        tags: [],
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    subtitle: "Principal Plates",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=1200&q=85",
    items: [
      {
        name: "Filet Mignon",
        description:
          "Prime beef tenderloin on a bed of mashed red potatoes with garlic and parmesan, with brown sugar glazed carrots",
        price: "46",
        tags: [],
      },
      {
        name: "Creamy Mushroom & Spinach Gnocchi",
        description:
          "Grain-free potato gnocchi in a silky thyme cream sauce with roasted mushroom medley",
        price: "30",
        tags: ["Gluten Free", "Vegetarian"],
      },
      {
        name: "Steak Au Poivre Pasta",
        description:
          "Rigatoni and tomato compote with braised peppercorn-crusted tenderloin tips with locally sourced goat cheese",
        price: "32",
        tags: [],
      },
      {
        name: "Chicken Confit",
        description:
          "Tender chicken thigh slow-braised in duck fat, pan seared, served atop sautéed greens, nuts, cranberries, and carrot purée",
        price: "28",
        tags: [],
      },
      {
        name: "Coconut Curry",
        description:
          "Yellow coconut curry served with ginger jasmine rice and grilled pita",
        price: "26",
        tags: ["Vegetarian"],
      },
      {
        name: "Pan-Seared Shrimp Risotto",
        description:
          "Pan-seared shrimp over a bed of parmesan risotto topped with a creole tomato compote and locally sourced micro greens",
        price: "30",
        tags: ["Gluten Free"],
      },
      {
        name: "Steak Oscar",
        description:
          "A grilled filet mignon on top of grilled asparagus, a handful of lump crab meat and lathered in a béarnaise sauce",
        price: "48",
        tags: [],
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet Finishes",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=1200&q=85",
    items: [
      {
        name: "Monarch Cheesecake",
        description:
          "New York style cheesecake with our housemade mixed berry compote",
        price: "9",
        tags: [],
      },
      {
        name: "Tidy Eton Mess",
        description:
          "Crisp meringue, white cake, strawberry mousse, whipped cream",
        price: "16",
        tags: ["Gluten Free"],
      },
      {
        name: "Tiramisu",
        description:
          "Cookies soaked in espresso coffee with mascarpone cheese, topped with cocoa powder",
        price: "11",
        tags: [],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="hidden md:block fixed inset-0 -z-10" style={{backgroundImage:`url(${heroImage})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundAttachment:'fixed'}} />
      <div className="md:hidden fixed inset-0 -z-10" style={{backgroundImage:`url(${heroImage})`,backgroundSize:'400% auto',backgroundPosition:'center top',backgroundRepeat:'no-repeat'}} />
      <div className="fixed inset-0 bg-black/55 -z-5" />

      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <p className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-3">
            The Monarch
          </p>
          <h1
            className="text-5xl md:text-7xl font-bold text-[var(--cream)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h1>
          <p
            className="text-[var(--cream)] opacity-70 italic text-base"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Seasonal ingredients, classical techniques, unforgettable flavors
          </p>
        </div>
      </section>

      {/* ── Menu Sections ───────────────────────────────── */}
      <div>
        {menuSections.map((section, sectionIdx) => {
          const isEven = sectionIdx % 2 === 0;
          return (
            <section
              key={section.id}
              id={section.id}
              className="relative py-20 md:py-28"
            >
              {/* Full-bleed background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-[var(--charcoal)]/88" />
              </div>

              {/* Content — reverses on even sections */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-12 md:gap-16 items-start`}>

                  {/* Section header — left side */}
                  <div className="md:w-48 shrink-0">
                    <ScrollReveal>
                      <p className="text-[var(--gold)] text-sm tracking-[0.25em] uppercase mb-2">
                        {section.subtitle}
                      </p>
                      <h2
                        className="text-4xl md:text-5xl font-semibold text-[var(--cream)] mb-4"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {section.title}
                      </h2>
                      <div className="h-px bg-[var(--gold)] w-12" />
                    </ScrollReveal>
                  </div>

                  {/* Menu items — right side */}
                  <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                      {section.items.map((item) => (
                        <ScrollReveal key={item.name}>
                          <div className="group">
                            <div className="flex justify-between items-baseline gap-4 mb-2">
                              <h3
                                className="text-lg font-semibold text-[var(--cream)] group-hover:text-[var(--gold)] transition-colors"
                                style={{ fontFamily: "'Playfair Display', serif" }}
                              >
                                {item.name}
                              </h3>
                              <span className="text-[var(--gold)] font-medium text-base shrink-0">
                                ${item.price}
                              </span>
                            </div>
                            <p className="text-sm leading-relaxed text-[var(--cream)] opacity-60">
                              {item.description}
                            </p>
                            <div className="mt-3 h-px bg-[var(--gold)] opacity-20" />
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── Footer CTA ──────────────────────────────────── */}
      <section className="bg-[var(--charcoal)] py-16 px-6 md:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-semibold text-[var(--cream)] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Dine?
          </h2>
          <p className="text-[var(--cream)] opacity-60 text-sm mb-8">
            Reservations are recommended, especially on weekends.
          </p>
          <a
            href="https://tables.hostmeapp.com/restaurants/34277"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3.5 bg-[var(--gold)] text-[var(--charcoal)] text-sm font-medium tracking-wider uppercase md:hover:bg-[var(--cream)] transition-colors duration-300"
          >
            Reserve Your Table
          </a>
        </div>
      </section>
    </>
  );
}
