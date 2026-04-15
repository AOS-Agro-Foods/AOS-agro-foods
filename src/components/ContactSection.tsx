import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Get In Touch
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Contact Us
          </motion.h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: Phone, label: "Phone", value: "+91 9773531529", href: "tel:+919773531529" },
              { icon: Mail, label: "Email", value: "info@aosagrofoods.com", href: "mailto:info@aosagrofoods.com" },
              { icon: MapPin, label: "Address", value: "GF 2646, Gali Raghunandan, Naya Bazaar, Lahori Gate, Delhi — 110006" },
            ].map((item, i) => (
              <motion.div key={item.label} custom={i} variants={fadeUp} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-body text-base text-foreground transition-colors hover:text-secondary">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-body text-base leading-relaxed text-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5 rounded-2xl border border-border bg-card p-8"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <motion.div variants={fadeUp} custom={0}>
              <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Your full name"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="you@company.com"
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={2}>
              <label className="mb-1.5 block font-body text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={4}
                required
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 font-body text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us about your requirements..."
              />
            </motion.div>
            <motion.div variants={fadeUp} custom={3}>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg"
              >
                {submitted ? "Sent Successfully!" : (
                  <>
                    Submit Inquiry <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
