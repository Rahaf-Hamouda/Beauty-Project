import React from "react";

// ✅ استيراد الصور
import FaceCare from "../../Images/Face care.png";
import SkinCare from "../../Images/Skin care.png";
import BodyCare from "../../Images/Body care.png";
import NaturalTreatment from "../../Images/Natural treatment.png";
import Body from "../../Images/Body Relaxation.jpg";

const services = () => {
  return (
    <>
      <section
        id="services"
        className="w-screen scroll-mt-20 min-h-screen bg-white py-12 flex items-center justify-center px-[30px]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <h2 className="text-3xl font-bold text-[#556963] mb-2 border-b-4 border-[#556963] w-fit mx-auto lg:mx-0 pb-1 italic">
              Face treatment
            </h2>
            <p className="text-[#556963] text-lg leading-relaxed mt-4">
              facial treatment that is carried out using pressure or massage so
              that the face is always kept clean. <br />
              healthy and beautiful where this facial treatment is very
              important that can eliminate facial problems that are not well
              maintained.
            </p>
            <button className="mt-6 bg-[#556963] text-white px-6 py-3 rounded-md text-lg hover:bg-[#44524f] transition italic">
              See Treatment
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-1/2 w-full">
            <Card image={FaceCare} title="Face treatment natural way" />
            <Card image={SkinCare} title="Skin care the natural way" />
            <Card image={BodyCare} title="Body care natural way" />
            <Card image={NaturalTreatment} title="Natural way of treatment" />
          </div>
        </div>
      </section>

      <section className="w-screen scroll-mt-20 min-h-screen bg-white py-12 flex items-center justify-center px-[30px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 w-full">
          <div className="md:w-1/2 w-full">
            <img
              src={Body}
              alt="Body Relaxation"
              className="rounded-xl shadow-md w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#556963] mb-2 border-b-4 border-[#556963] w-fit mx-auto lg:mx-0 pb-1 italic">
              Body Relaxation
            </h2>
            <p className="text-[#556963] text-base md:text-lg leading-relaxed mb-6">
              when your skin feels burning and irritated. To relieve it, you can
              do treatments at our clinic by soaking in traditional herbs and
              feel a beauty massage by practitioners from our clinic. You’ll
              feel comfortable and your skin problems can slowly disappear.
            </p>
            <button className="mt-6 bg-[#556963] text-white px-6 py-3 rounded-md text-lg hover:bg-[#44524f] transition italic">
              See Treatment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ image, title }) => (
  <div className="flex items-center p-4 shadow-md rounded-md bg-white hover:shadow-lg transition">
    <img src={image} alt={title} className="w-16 h-16 object-contain mr-4" />
    <p className="text-[#556963] font-medium">{title}</p>
  </div>
);

export default services;
