import { motion } from "framer-motion";

import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-4 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex items-center justify-center min-h-[70vh]">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 sm:px-8 lg:w-1/2"
        >
          <div className="flex">
            <p className="my-2 max-w-xl text-center">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}  

export default About;
