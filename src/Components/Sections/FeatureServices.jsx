import React, { useRef } from "react";
import { FiCheckCircle, FiShoppingBag, FiHeart } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

const features = [
  {
    title: "Maintenance license",
    description: "Keep your services up-to-date with minimal effort.",
    icon: (
      <FiCheckCircle className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />
    ),
  },
  {
    title: "Easy payment and order",
    description: "Seamless checkout with multiple payment options.",
    icon: (
      <FiShoppingBag className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />
    ),
  },
  {
    title: "Gift discount membership",
    description: "Get exclusive offers and rewards on every order.",
    icon: <FiHeart className="w-8 h-8 text-[#eafff6] flex-shrink-0 mt-1" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 1.5, 
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureBanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      className="w-screen bg-[#576b62] text-[#ffffff] px-8 py-12 font-main"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col md:flex-row gap-10 justify-around items-start">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4 max-w-xs"
            variants={itemVariants}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {feature.icon}
            <div>
              <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm opacity-90">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
