import React from "react";
import homeImg from "../../Images/Products.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="w-screen scroll-mt-24 h-screen w-full bg-[#fff] flex items-center justify-center overflow-x-hidden px-[30px]"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#576b62] mb-6 italic">
            Discover Your True Beauty
          </h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Welcome to Beauty Center – where elegance meets excellence. We
            provide professional care and premium products tailored just for
            you.
          </p>
          <button className="bg-[#576b62] text-[#eafff6] px-4 py-4 rounded-lg text-lg hover:bg-[#45574f] transition duration-300 italic">
            Book Now
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={homeImg}
            alt="Beauty"
            className="rounded-xl max-w-full shadow-xl object-cover"
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
