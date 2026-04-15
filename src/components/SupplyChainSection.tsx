import { motion } from "framer-motion";
import { Sprout, Factory, PackageCheck, Ship } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const steps = [
  { icon: Sprout, label: "Farm", desc: "Sourced from certified farms" },
  { icon: Factory, label: "Processing", desc: "State-of-the-art facilities" },
  { icon: PackageCheck, label: "Packaging", desc: "Export-grade quality packaging" },
  { icon: Ship, label: "Export", desc: "Global distribution network" },
];

const SupplyChainSection = () => (
  <section id="supply-chain" className="section-padding bg-forest-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
    <div className="relative mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          Our Process
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-background md:text-4xl lg:text-5xl">
          Supply Chain Excellence
        </motion.h2>
        <motion.p variants={fadeUp} custom={2} className="mx-auto mt-4 max-w-xl font-body text-base text-background/70">
          Every step is monitored, documented, and optimized for quality
        </motion.p>
      </motion.div>

      <div className="relative mt-20">
        <div className="absolute left-0 right-0 top-14 hidden h-[2px] bg-background/15 md:block" />
        <div className="grid gap-12 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/30 bg-forest-dark/50 backdrop-blur-sm transition-all hover:border-gold hover:shadow-[0_0_30px_hsla(45,72%,46%,0.2)]">
                <step.icon className="h-10 w-10 text-gold" />
              </div>
              <span className="mt-2 inline-block rounded-full bg-gold/20 px-3 py-0.5 font-body text-[10px] font-bold uppercase tracking-widest text-gold">
                Step {i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-background">
                {step.label}
              </h3>
              <p className="mt-2 font-body text-sm text-background/60">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SupplyChainSection;
