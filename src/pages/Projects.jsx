import { motion } from "framer-motion";
import gharbetibaImg from "../assets/gharbetiba.png";
import mulyaImg from "../assets/mulya.png";
import yatraImg from "../assets/yatra.png";
import bakeryImg from "../assets/bakery.png";

const projects = [
  {
    title: "Yatra",
    industry: "Travel & Hospitality",
    description:
      "A multi-tenant travel operating system powering itinerary design, budgeting, and collaboration for premium agencies.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: yatraImg,
    link: "https://yatra-frontend-three.vercel.app/home", // TODO: Replace with actual link
  },
  {
    title: "GharBetiBa",
    industry: "PropTech",
    description:
      "A transaction platform supporting the full lifecycle of property discovery, valuation, and closing for the Nepali real estate market.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: gharbetibaImg,
    link: "https://ghar-beti-ba.vercel.app/home", // TODO: Replace with actual link
  },
  {
    title: "Mulya",
    industry: "Marketplace & Auctions",
    description:
      "A real-time bidding platform that connects collectors with independent sellers, emphasizing trust and transparency.",
    technologies: ["React", "Java/Spring Boot", "MySQL"],
    image: mulyaImg,
    link: "https://mulya.example.com", // TODO: Replace with actual link
  },
  {
    title: "Detrenebrod",
    industry: "Food & Bakery",
    description:
      "A digital presence platform for Det Rene Brød, a premium organic Danish bakery. Features product catalogs, ordering system, delivery management, and admin dashboard for inventory and order tracking.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: bakeryImg,
    link: "https://jellyfish-app-tofx7.ondigitalocean.app/",
  },
];

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div>
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">
            A collection of projects I've built and shipped.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800"
            >
              <div className="grid gap-0 lg:grid-cols-[1.2fr_1fr]">
                <div className="cursor-pointer relative h-80 lg:h-auto overflow-hidden">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    aria-label={`Go to ${project.title} project`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </a>
                </div>

                <div className="flex flex-col gap-8 p-8 lg:p-10">
                  <div className="space-y-4">
                    <span className="badge-soft">{project.industry}</span>
                    <h3 className="text-3xl font-bold text-light">
                      {project.title}
                    </h3>
                    <p className="text-lg text-tertiary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-slate-700 pt-6">
                    <p className="text-xs uppercase tracking-widest font-semibold text-tertiary">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="badge-soft">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-cyan-400 focus-ring"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
