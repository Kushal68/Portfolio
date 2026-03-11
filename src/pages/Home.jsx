import { motion } from "framer-motion";
import cvFile from "../assets/CV_Kushal.pdf";
import profileImg from "../assets/image.png";

const Home = () => {
  return (
    <section className="section-wrapper  pb-10 md:pt-10 md:pb-5" id="home">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid gap-12 lg:grid-cols-2 items-start"
      >
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-light">
              I'm Available
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
              <span className="text-secondary">KUSHAL</span>
              <br />
              <span className="text-tertiary">PARIYAR</span>
            </h1>
            <p className="text-lg md:text-xl text-tertiary leading-relaxed max-w-lg">
              Building resilient products that scale. From architecture to
              launch, I drive clarity and velocity.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-lg transition hover:bg-gray-100"
            >
              View Projects
            </a>
            <a
              href={cvFile}
              download
              className="inline-flex items-center justify-center rounded-full border-2 border-secondary bg-transparent px-8 py-4 text-base font-semibold text-secondary transition hover:bg-secondary hover:text-primary"
            >
              Download CV
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block -mx-20"
        >
          <div className="relative w-screen h-screen max-w-full mx-auto pt-25 ">
            <img
              src={profileImg}
              alt="Kushal Pariyar"
              className="w-full h-5/6 object-cover rounded-2xl ml-16"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
