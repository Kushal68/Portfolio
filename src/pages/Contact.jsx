import { useState } from "react";
import { motion } from "framer-motion";

const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Kushal68",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/kushal-pariyar/",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/_pariyar_kushal",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real integration (email service, CRM, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section className="section-wrapper" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16 max-w-4xl mx-auto"
      >
        <div className="space-y-8 text-center">
          <h2 className="section-heading">
            Ready to Build Something Together?
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            I'm available for new projects, consulting, and partnerships. Let's
            talk about your vision.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6">
            <div className="content-card space-y-6">
              <h3 className="text-2xl font-bold text-light">Get in Touch</h3>
              <div className="space-y-4 border-t border-slate-700 pt-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest font-semibold text-tertiary">
                    Email
                  </p>
                  <a
                    href="mailto:pariyar.kushal825@gmail.com"
                    className="text-lg font-semibold text-secondary hover:text-light transition"
                  >
                    pariyar.kushal825@gmail.com
                  </a>
                </div>
              </div>
              <div className="space-y-4 border-t border-slate-700 pt-6">
                <p className="text-xs uppercase tracking-widest font-semibold text-tertiary">
                  Follow
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light hover:text-secondary transition font-medium"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="content-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-semibold text-light"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-light placeholder:text-tertiary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-semibold text-light"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-light placeholder:text-tertiary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-semibold text-light"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-light placeholder:text-tertiary focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-cyan-400 focus-ring"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
