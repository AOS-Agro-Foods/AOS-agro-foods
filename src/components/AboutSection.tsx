import { motion } from "framer-motion";
import { ShieldCheck, Wheat, Globe } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const features = [
  {
    icon: Wheat,
    title: "Farm-to-Fork Traceability",
    desc: "Complete visibility from origin farms to your shelf, with documented quality checks at every stage.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "FSSAI certified processes, rigorous lab testing, and international compliance at every step.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Export-grade operations meeting CODEX, ISO, and HACCP benchmarks for worldwide distribution.",
  },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-cream">
    <div className="mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          About Us
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Bridging Traditional Farming{" "}
          <br className="hidden md:block" />
          with Modern Processing
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-warm-gray md:text-lg">
          AOS Agro Foods Private Limited connects India's rich agricultural heritage
          with cutting-edge processing technology, delivering premium quality to
          markets across the globe.
        </motion.p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="hover-lift group rounded-2xl border border-border bg-card p-8 text-center"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary">
              <f.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
              {f.title}
            </h3>
            <p className="mt-3 font-body text-sm leading-relaxed text-warm-gray">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
