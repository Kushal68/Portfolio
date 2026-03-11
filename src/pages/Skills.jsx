import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Frontend Engineering",
    description:
      "Ship elegant user interfaces with strong accessibility, animation, and performance guardrails.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Design Systems",
    ],
  },
  {
    label: "Backend & APIs",
    description:
      "Design resilient service layers and integrations that keep data consistent and flows observable.",
    items: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST",
      "Java / Spring Boot",
      "Python FastAPI",
    ],
  },
  {
    label: "Cloud & Data",
    description:
      "Partner with DevOps to build environments that scale, self-heal, and unlock real-time insights.",
    items: ["AWS", "Docker & Kubernetes (Learning)", "MongoDB", "PostgreSQL"],
  },
];

const Skills = () => {
  return (
    <section className="section-wrapper -mt-64" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        <header className="space-y-6">
          <span className="section-eyebrow">Skills</span>
          <h1 className="section-heading leading-tight">
            Broad skills, deep, enterprise-ready results.
          </h1>
        </header>

        <section className="grid gap-12 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="content-card space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-light">{group.label}</h3>
                <p className="mt-4 text-base text-tertiary leading-relaxed">
                  {group.description}
                </p>
              </div>
              <ul className="space-y-3 border-t border-stone-200 pt-6">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-light"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </section>
      </motion.div>
    </section>
  );
};

export default Skills;
