import { memo } from "react";

const CURRENT_YEAR = new Date().getFullYear();

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Kushal68" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kushal-pariyar/" },
  { label: "Twitter", href: "https://twitter.com/_pariyar_kushal" },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-700 bg-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-light">KP</p>
            <p className="mt-3 text-sm text-tertiary leading-relaxed">
              Engineering leader building products that scale and drive growth.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-tertiary">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-tertiary hover:text-light transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-sm text-tertiary hover:text-light transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-tertiary hover:text-light transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-tertiary hover:text-light transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest font-semibold text-tertiary">
              Follow
            </p>
            <ul className="mt-4 space-y-2">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-tertiary hover:text-light transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-tertiary">
          <p>© {CURRENT_YEAR} Kushal Pariyar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
