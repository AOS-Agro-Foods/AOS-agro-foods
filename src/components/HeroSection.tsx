import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Place your MP4 file at: public/hero.mp4  (it will be served from the site root as /hero.mp4)
// Optional: also add public/hero.webm for better compression on supported browsers.
const VIDEO_SRC = "/hero.mp4";
const VIDEO_SRC_WEBM = "/hero.webm";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('canplay', () => {
        video.play();
      });
    }
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest-dark">
      {/* Background: video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source src={VIDEO_SRC_WEBM} type="video/webm" />
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* Cinematic dark-green gradient overlay for readability */}
      <div
        className="hero-overlay absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsla(157,80%,8%,0.85) 0%, hsla(157,70%,15%,0.55) 45%, hsla(157,80%,8%,0.78) 100%)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-forest-dark/40"
        style={{ zIndex: 1 }}
      />
      {/* Subtle vignette for depth */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsla(157,80%,8%,0.55) 100%)",
          zIndex: 1,
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="mb-6 inline-block rounded-full border border-gold/30 bg-gold/10 px-5 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold-light backdrop-blur-sm">
            Premium Agro Exports India
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-background drop-shadow-[0_2px_20px_rgba(0,0,0,0.4)] sm:text-5xl md:text-6xl lg:text-7xl">
            From Farm to Fork —{" "}
            <span className="text-gradient-gold">Premium Processing</span>{" "}
            You Can Trust
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg font-light leading-relaxed text-background/90 md:text-xl">
            India's trusted bulk grain supplier — ensuring quality, traceability, and global standards in every grain
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#contact"
            aria-label="Request a bulk quotation"
            className="rounded-lg bg-secondary px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.03em] text-secondary-foreground shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110"
          >
            Request Bulk Quotation
          </a>
          <a
            href="#contact"
            aria-label="Schedule a facility tour"
            className="rounded-lg border-[1.5px] border-background/80 bg-background/5 px-8 py-4 font-body text-sm font-semibold uppercase tracking-[0.03em] text-background backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-background/15"
          >
            Schedule Facility Tour
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-background/75"
        >
          {["FSSAI Certified", "ISO 22000:2018", "APEDA Registered", "HACCP Compliant"].map((b) => (
            <span
              key={b}
              className="font-body text-xs font-medium uppercase tracking-[0.18em]"
            >
              {b}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ zIndex: 2 }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-background/40 p-1">
          <div className="mx-auto h-2 w-1 rounded-full bg-background/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
