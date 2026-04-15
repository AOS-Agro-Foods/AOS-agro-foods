import logo from "@/assets/logo.jpg";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Supply Chain", href: "#supply-chain" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Investors", href: "#investors" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-forest-gradient px-6 py-16 text-background">
    <div className="mx-auto max-w-6xl">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AOS Agro Foods" className="h-10 w-10 rounded-lg object-contain" />
            <span className="font-display text-xl font-bold tracking-tight text-background">
              AOS Agro Foods
            </span>
          </div>
          <p className="mt-3 max-w-xs font-body text-sm text-background/60">
            Premium agro processing, from India to the world.
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-background/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 border-t border-background/10 pt-8 text-center">
        <p className="font-body text-xs text-background/40">
          © {new Date().getFullYear()} AOS Agro Foods Private Limited. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
