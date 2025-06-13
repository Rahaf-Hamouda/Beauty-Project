import React from "react";
import {
  FiCheckCircle,
  FiShoppingBag,
  FiHeart,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";
import Logo from "../../Images/Logowhite.png";

const Footer = () => {
  const features = [
    {
      title: "Maintenance license",
      icon: <FiCheckCircle className="w-6 h-6 text-[#eafff6]" />,
    },
    {
      title: "Easy payment and order",
      icon: <FiShoppingBag className="w-6 h-6 text-[#eafff6]" />,
    },
    {
      title: "Gift discount membership",
      icon: <FiHeart className="w-6 h-6 text-[#eafff6]" />,
    },
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-[#576b62] text-white px-8 py-12 font-main"
    >
      <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-10">
        <div className="flex-shrink-0 self-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-4 text-sm text-center self-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {feature.icon}
              <p>{feature.title}</p>
            </div>
          ))}
        </div>
        <div className="flex-shrink-0 flex flex-col items-center justify-center self-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className="w-6 h-6 text-white hover:text-[#eafff6] transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin className="w-6 h-6 text-white hover:text-[#eafff6] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/30 pt-6 text-center text-xs text-white">
        © 2025 Rahaf Brand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
