import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85";

type MenuItem = {
  name: string;
  description: string;
  price: string;
  tags: string[];
  priceSuffix?: string;
  priceAlt?: string;
  priceAltSuffix?: string;
};

type MenuSection = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "To Begin",
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
        priceSuffix: "cup",
        priceAlt: "18",
        priceAltSuffix: "bowl",
        tags: [],
      },
      {
        name: "Loaded Potato Soup",
        description:
          "Creamy loaded soup with chunks of potatoes, bacon, and cheese",
        price: "6",
        priceSuffix: "cup",
        priceAlt: "14",
        priceAltSuffix: "bowl",
        tags: [],
      },
    ],
  },
  {
    id: "mains",
    title: "Main Course",
    subtitle: "Principal Plates",
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
    title: "Dessert",
    subtitle: "Sweet Finishes",
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

const tagColors: Record<string, string> = {
  Vegetarian:
    "bg-green-100 text-green-800 border-green-200",
  "Gluten Free":
    "bg-amber-100 text-amber-800 border-amber-200",
};

export default function MenuPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <div
        className="hidden md:block fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />
      <div
        className="md:hidden fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "400% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="fixed inset-0 bg-black/60 -z-5" />

      {/* ── Header ─────────────────────────────────────── */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[var(--gold)] border-opacity-20">
        <a href="/" className="flex items-center gap-3">
          <div className="text-[var(--gold)] text-xs tracking-[0.25em] uppercase">
            The Monarch
          </div>
        </a>
        <nav className="flex items-center gap-6 md:gap-10">
          <a
            href="/"
            className="text-[var(--cream)] text-xs tracking-[0.2em] uppercase opacity-70 md:hover:opacity-100 transition-opacity"
          >
            Home
          </a>
          <a
            href="/menu"
            className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase border-b border-[var(--gold)] pb-0.5"
          >
            Menu
          </a>
          <a
            href="/about"
            className="text-[var(--cream)] text-xs tracking-[0.2em] uppercase opacity-70 md:hover:opacity-100 transition-opacity"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-[var(--cream)] text-xs tracking-[0.2em] uppercase opacity-70 md:hover:opacity-100 transition-opacity"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* ── Menu Hero ───────────────────────────────────── */}
      <section className="relative min-h-[50dvh] flex items-center justify-center px-6">
        <div className="relative z-10 text-center">
          <p
            className="text-[var(--gold)] text-sm tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--cream)] mb-4 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dinner
          </h1>
          <p
            className="text-[var(--cream)] opacity-60 text-sm italic max-w-md mx-auto"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Scratch cooking, local ingredients, classical French techniques — every plate, every evening.
          </p>

          {/* Print reference link */}
          <div className="mt-8">
            <a
              href="/menu-dinner.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity underline underline-offset-4"
            >
              View Full Menu (Print)
            </a>
          </div>
        </div>
      </section>

      {/* ── Menu Sections ───────────────────────────────── */}
      {menuSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="relative z-10 bg-[var(--charcoal)] py-16 md:py-20 px-6 md:px-8"
        >
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16">
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="h-px w-12 bg-[var(--gold)] opacity-40" />
                  <p
                    className="text-[var(--gold)] text-xs tracking-[0.3em] uppercase"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {section.subtitle}
                  </p>
                  <div className="h-px w-12 bg-[var(--gold)] opacity-40" />
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[var(--cream)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {section.title}
                </h2>
              </div>
            </ScrollReveal>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {section.items.map((item, i) => (
                <ScrollReveal key={item.name} delay={i * 0.05}>
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3
                        className="text-lg md:text-xl text-[var(--cream)] font-semibold leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.name}
                      </h3>
                      <span
                        className="text-[var(--gold)] text-base md:text-lg font-medium shrink-0"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {item.priceAlt ? (
                          <span>
                            ${item.price}
                            <span className="text-xs opacity-50 ml-1">
                              {item.priceSuffix}
                            </span>
                            {" – "}
                            ${item.priceAlt}
                            <span className="text-xs opacity-50 ml-1">
                              {item.priceAltSuffix}
                            </span>
                          </span>
                        ) : (
                          <>${item.price}</>
                        )}
                      </span>
                    </div>
                    <p className="text-[var(--cream)] opacity-50 text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[10px] tracking-wide px-2 py-0.5 border rounded-full ${
                              tagColors[tag] ??
                              "bg-[var(--gold)] text-[var(--charcoal)] border-transparent"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ── Add-Ons & Notes ─────────────────────────────── */}
      <section className="relative z-10 bg-[var(--charcoal)] py-12 px-6 md:px-8 border-t border-[var(--cream)] border-opacity-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-[var(--gold)] border-opacity-60 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[var(--gold)] opacity-80" />
              </div>
              <span className="text-[var(--cream)] opacity-50 text-xs tracking-wider uppercase">
                Gluten Free
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border border-[var(--gold)] border-opacity-60 rounded-full flex items-center justify-center">
                <span className="text-[var(--gold)] text-[8px] font-bold">V</span>
              </div>
              <span className="text-[var(--cream)] opacity-50 text-xs tracking-wider uppercase">
                Vegetarian
              </span>
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <p className="text-[var(--cream)] opacity-40 text-xs">
              Add chicken +$7 · Add shrimp +$9
            </p>
            <p className="text-[var(--cream)] opacity-30 text-xs">
              No substitutions please
            </p>
          </div>

          <p className="text-[var(--cream)] opacity-25 text-[10px] max-w-lg mx-auto leading-relaxed">
            *Some individuals may be at higher risk for foodborne illness if the following foods are consumed raw or uncooked: eggs, beef, fish, lamb, and milk.
          </p>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────── */}
      <footer className="relative z-10 bg-[var(--charcoal)] py-10 px-6 md:px-8 border-t border-[var(--gold)] border-opacity-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p
              className="text-[var(--gold)] text-sm tracking-widest uppercase mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Monarch
            </p>
            <p className="text-[var(--cream)] opacity-40 text-xs">
              502 S Main St · Stillwater, OK · (405) 714-2002
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-[var(--cream)] opacity-40 text-xs">
              Wed–Thu 4pm–9pm · Fri–Sat 4pm–10pm
            </p>
            <p className="text-[var(--gold)] opacity-60 text-xs">
              Happy Hour Daily 4–6pm
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
