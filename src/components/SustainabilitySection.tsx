import { motion } from "framer-motion";
import { Leaf, Heart, Recycle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const pillars = [
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    desc: "Solar-powered facilities, water recycling systems, and minimal carbon footprint across our operations.",
  },
  {
    icon: Heart,
    title: "Ethical Sourcing",
    desc: "Fair pricing for farmers, transparent partnerships, and community development programs in growing regions.",
  },
  {
    icon: Recycle,
    title: "Waste Reduction",
    desc: "Zero-waste processing goals with by-product utilization and biodegradable packaging initiatives.",
  },
];

const SustainabilitySection = () => (
  <section id="sustainability" className="section-padding bg-cream">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Our Commitment
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Sustainability at Core
        </motion.h2>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/5 to-transparent p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <p.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-warm-gray">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SustainabilitySection;
