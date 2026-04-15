import { motion } from "framer-motion";
import { Wheat, Package, Handshake } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const products = [
  {
    icon: Wheat,
    title: "Premium Grains & Pulses",
    desc: "Sustainably sourced, zero-additive grains and pulses processed in state-of-the-art facilities for maximum purity and nutrition.",
    tags: ["Sustainable Sourcing", "Zero Additives"],
  },
  {
    icon: Package,
    title: "Private Labeling",
    desc: "End-to-end custom packaging solutions for global brands — from design to delivery, tailored to your market needs.",
    tags: ["Custom Packaging", "Global Brands"],
  },
  {
    icon: Handshake,
    title: "Contract Farming",
    desc: "Direct farmer partnerships ensuring consistent quality, fair trade practices, and reliable supply chain management.",
    tags: ["Direct Partnerships", "Fair Trade"],
  },
];

const ProductsSection = () => (
  <section id="products" className="section-padding">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Our Offerings
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Products & Services
        </motion.h2>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="hover-lift group relative overflow-hidden rounded-2xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute inset-0 bg-forest-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-background/20">
                <p.icon className="h-6 w-6 text-primary transition-colors group-hover:text-background" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-background">
                {p.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-warm-gray transition-colors group-hover:text-background/80">
                {p.desc}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-3 py-1 font-body text-xs text-muted-foreground transition-colors group-hover:border-background/30 group-hover:text-background/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
