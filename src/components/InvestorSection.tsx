import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const docs = [
  { title: "FSSAI Certificate", desc: "Food Safety and Standards Authority certification" },
  { title: "Compliance Documents", desc: "Regulatory and export compliance records" },
  { title: "Quality Reports", desc: "Annual quality assurance and audit reports" },
];

const InvestorSection = () => (
  <section id="investors" className="section-padding">
    <div className="mx-auto max-w-4xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="text-center"
      >
        <motion.p variants={fadeUp} custom={0} className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Transparency
        </motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          Investor Relations
        </motion.h2>
      </motion.div>

      <div className="mt-12 space-y-4">
        {docs.map((doc, i) => (
          <motion.div
            key={doc.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            variants={fadeUp}
            className="flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-all hover:shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-display text-base font-semibold text-foreground">{doc.title}</h4>
                <p className="font-body text-sm text-warm-gray">{doc.desc}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 rounded-full border border-border px-5 py-2 font-body text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download</span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default InvestorSection;
