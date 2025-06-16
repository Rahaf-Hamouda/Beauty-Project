import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import homeImg from "../../Images/Products.jpg";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="w-screen min-h-screen scroll-mt-24 bg-[#fff] flex items-center justify-center overflow-x-hidden px-[30px] pt-20"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#576b62] mb-6 italic">
            Discover Your True Beauty
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Welcome to Beauty Center – where elegance meets excellence. We
            provide professional care and premium products tailored just for
            you.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#576b62] text-[#eafff6] px-4 py-4 rounded-lg text-lg hover:bg-[#45574f] transition duration-300 italic"
          >
            Book Now
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src={homeImg}
            alt="Beauty"
            className="rounded-xl max-w-full shadow-xl object-cover"
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
