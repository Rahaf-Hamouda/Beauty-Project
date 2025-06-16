import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logo from "../../Images/Logo.png";
import About from "../../Images/About.jpg";

const AboutUs = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const isInView1 = useInView(section1Ref, { once: true, margin: "-100px" });
  const isInView2 = useInView(section2Ref, { once: true, margin: "-100px" });

  return (
    <>
      <motion.section
        ref={section1Ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView1 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="about"
        className="relative scroll-mt-20 min-h-screen w-screen flex flex-col items-center justify-start px-4 pt-20"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${About})`,
            filter: "blur(4px)",
            zIndex: 0,
          }}
        />
        <div
          className="relative bg-opacity-70 p-8 rounded-lg max-w-2xl w-full flex flex-col"
          style={{ minHeight: "60vh", zIndex: 1 }}
        >
          <div className="flex justify-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "#576b62" }}>
              About Us
            </h2>
          </div>
          <div
            className="flex items-center justify-center mx-auto"
            style={{ flex: 0.5 }}
          >
            <p
              className="font-medium leading-relaxed max-w-xl text-center"
              style={{ color: "#576b62", lineHeight: "1.5", marginTop: 0 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        ref={section2Ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-screen relative scroll-mt-20 min-h-screen bg-white py-12 flex flex-col items-center px-[30px]"
      >
        <div className="absolute top-6 left-6 text-[#576b62] text-[200px] font-serif leading-none opacity-80 pointer-events-none select-none z-0">
          &#8220;
        </div>
        <div className="absolute bottom-6 right-6 text-[#576b62] text-[200px] font-serif leading-none opacity-80 pointer-events-none select-none z-0">
          &#8221;
        </div>
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center mt-12"
          style={{ border: "3px solid #556963" }}
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-50 h-50 rounded-full object-cover"
          />
        </div>
        <div className="flex items-center" style={{ flex: 0.5 }}>
          <p
            className="text-[#556963] font-medium max-w-xl text-center mx-auto"
            style={{ lineHeight: "1.3", marginTop: "0.5rem" }}
          >
            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
            zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze
            bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een
            zethaak met letters nam en ze door elkaar husselde om een
            font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd
            maar is ook, vrijwel onveranderd, overgenomen in elektronische
            letterzetting. Het is in de jaren '60 populair geworden met de
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default AboutUs;
