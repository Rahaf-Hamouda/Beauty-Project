import React, { useState, useEffect } from "react";
import Logo from "../../Images/Logo.png";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = ["home", "services", "about", "footer"];
  const NAVBAR_HEIGHT = 80;

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const sections = navItems.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-[#eafff6] shadow-md z-50 font-segoeui px-[30px]">
      <div className="max-w-[100vw] w-full px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 justify-start">
          <img src={Logo} alt="Logo" className="h-14 w-auto object-contain" />
          <span className="text-2xl font-bold text-[#576b62] italic">
            Beauty
          </span>
        </div>
        <ul className="hidden md:flex space-x-10 text-lg font-semibold text-gray-700 ml-auto">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-NAVBAR_HEIGHT}
                className={`cursor-pointer hover:text-[#576b62] transition duration-300 ${
                  activeSection === section ? "text-[#576b62] underline" : ""
                }`}
              >
                {section === "footer"
                  ? "Footer"
                  : section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FiX className="text-3xl text-[#576b62]" />
            ) : (
              <FiMenu className="text-3xl text-[#576b62]" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#eafff6] px-6 py-4 space-y-4 text-center text-lg font-semibold shadow-inner">
          {navItems.map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-NAVBAR_HEIGHT}
              onClick={() => setMenuOpen(false)}
              className={`block cursor-pointer hover:text-[#576b62] transition duration-300 ${
                activeSection === section ? "text-[#576b62] underline" : ""
              }`}
            >
              {section === "footer"
                ? "Footer"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
