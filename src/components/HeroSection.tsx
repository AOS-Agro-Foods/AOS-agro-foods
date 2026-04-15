import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
    {/* Background */}
    <img
      src={heroBg}
      alt="Golden wheat fields with grain processing facility at sunset"
      className="absolute inset-0 h-full w-full object-cover"
      width={1920}
      height={1080}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-forest-gradient opacity-70" />
    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/90 via-transparent to-forest-dark/40" />

    <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <p className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
          Premium Agro Processing
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
          From Farm to Fork —{" "}
          <span className="text-gradient-gold">Premium Processing</span>{" "}
          You Can Trust
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-background/80 md:text-xl">
          Ensuring quality, traceability, and global standards in every grain
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#contact"
          className="rounded-full bg-secondary px-8 py-4 font-body text-sm font-semibold text-secondary-foreground transition-all hover:shadow-xl hover:brightness-110"
        >
          Request Quote
        </a>
        <a
          href="#contact"
          className="rounded-full border border-background/30 bg-background/10 px-8 py-4 font-body text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/20"
        >
          Book Facility Visit
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="h-10 w-6 rounded-full border-2 border-background/40 p-1">
        <div className="mx-auto h-2 w-1 rounded-full bg-background/60" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
