import { motion } from "framer-motion";

const experience = [
  {
    role: "Java Spring Developer Intern",
    company: "XDezo Technologies",
    period: "Feb 2025 — May 2025",
    summary:
      "Contributed to Mulya, a real-time auction platform, by building backend modules and product features that improved bidding reliability and user trust.",
    achievements: [
      "Implemented core bidding and lot-management APIs using Java and Spring Boot for low-latency auction workflows.",
      "Integrated MySQL persistence and optimized critical queries to keep bid updates fast during peak activity.",
      "Collaborated with frontend developers to deliver real-time bid status updates and improve end-user clarity.",
      "Added validation, testing, and bug fixes across auction flows to strengthen platform stability before release.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <header className="space-y-6">
          <span className="section-eyebrow">Experience</span>
          <h1 className="section-heading leading-tight">
            Professional history
          </h1>
        </header>

        <div className="space-y-6">
          {experience.map((item) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="content-card space-y-4"
            >
              <div className="flex flex-col gap-2 lg:flex-row lg:items-baseline lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-light">
                    {item.role}
                  </h3>
                  <p className="text-sm text-secondary">{item.company}</p>
                </div>
                <p className="text-sm text-tertiary/80">{item.period}</p>
              </div>
              <p className="text-sm text-tertiary leading-relaxed">
                {item.summary}
              </p>
              <ul className="space-y-2 text-sm text-tertiary/90">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary/80" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
