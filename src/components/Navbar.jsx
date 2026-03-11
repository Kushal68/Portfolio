import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Skills", path: "#skills" },
    { name: "Experience", path: "#experience" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-tertiary hover:text-secondary transition-all text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="text-tertiary transition-all hover:text-secondary md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-tertiary transition-all hover:text-secondary hover:bg-slate-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 block rounded-lg bg-secondary px-3 py-2 text-center text-sm font-semibold text-primary transition hover:bg-cyan-400"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
