import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Car,
  Bike,
  Sparkles,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/ri-logo.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modern color palette
  const colors = {
    darkGreen: "#0f2c1f",
    neonGreen: "#4ADE80",
    electricBlue: "#008236",
    white: "#FFFFFF",
    lightGray: "#f8fafc",
    darkGray: "#1f2937",
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header Bar with gradient */}
      <div
        style={{
          background: `linear-gradient(90deg, ${colors.darkGreen} 0%, #153d2e 100%)`,
          color: colors.white,
        }}
        className="py-1 px-4 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info - Left */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 bg-green-800/30 rounded-full">
                <Phone className="h-4 w-4 text-green-400" />
              </div>
              <span className="group-hover:text-green-300 transition-colors">
                +91 9078713435
              </span>
              <span className="group-hover:text-green-300 transition-colors">
                / +91 9348880533
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 bg-green-800/30 rounded-full">
                <Mail className="h-4 w-4 text-green-400" />
              </div>
              <span className="group-hover:text-green-300 transition-colors">
                ridein.car.rental143@gmail.com
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-2 bg-green-800/30 rounded-full">
                <MapPin className="h-4 w-4 text-green-400" />
              </div>
              <span className="group-hover:text-green-300 transition-colors">
                Ganga Nagar, Bhimpur, Bhubaneswar, 751001
              </span>
            </motion.div>
          </div>

          {/* Social Media - Right */}
          <div className="flex items-center gap-3 mt-2 md:mt-0">
            {[
              {
                icon: <FaFacebookF className="h-3 w-3" />,
                color: "hover:text-blue-400",
              },
              {
                icon: <FaInstagram className="h-3 w-3" />,
                color: "hover:text-pink-400",
              },
              {
                icon: <FaTwitter className="h-3 w-3" />,
                color: "hover:text-blue-400",
              },
              {
                icon: <FaYoutube className="h-3 w-3" />,
                color: "hover:text-red-400",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`p-2 bg-green-800/30 rounded-full text-green-300 transition-all ${social.color}`}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "rgba(74, 222, 128, 0.2)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation with glass morphism effect */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        style={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 1)",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.1)" : "none",
        }}
        className="transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo - Left with animation */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Logo Container */}
              <motion.div
                className="relative rounded-xl p-0"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={logo}
                  alt="Ridein Logo"
                  className="w-32 h-14 object-contain" // Adjust size as needed
                />
                {/* <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles
                    size={12}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                </motion.div> */}
              </motion.div>

              {/* Brand Name */}
              {/* <div>
                <span
                  style={{ color: colors.darkGreen }}
                  className="text-2xl font-bold tracking-tight"
                >
                  Ride<span style={{ color: colors.neonGreen }}>in</span>
                </span>
                <p className="text-xs text-gray-500 -mt-1">
                  Car & Bike Rentals
                </p>
              </div> */}
            </motion.div>
          </Link>
          {/* <Link to="/">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                style={{ backgroundColor: colors.neonGreen }}
                className="relative rounded-xl p-2 shadow-lg"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex">
                  <Car size={20} style={{ color: colors.darkGreen }} />
                  <Bike size={20} style={{ color: colors.darkGreen }} className="-ml-2" />
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles size={12} className="text-yellow-400" fill="currentColor" />
                </motion.div>
              </motion.div>
              <div>
                <span style={{ color: colors.darkGreen }} className="text-2xl font-bold tracking-tight">
                  Ride<span style={{ color: colors.neonGreen }}>in</span>
                </span>
                <p className="text-xs text-gray-500 -mt-1">Car & Bike Rentals</p>
              </div>
            </motion.div>
          </Link> */}

          {/* Navigation Links - Center with hover effects */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 font-medium transition-colors"
                style={{
                  color:
                    location.pathname === item.path
                      ? colors.neonGreen
                      : hoveredItem === index
                      ? colors.neonGreen
                      : colors.darkGray,
                }}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}

                {/* Active page indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-900"
                    layoutId="navbar-underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover effect */}
                {hoveredItem === index && location.pathname !== item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-900"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Book Now Button - Right with shine effect */}
          <div className="hidden md:block">
            <Link to="/booking">
              <motion.button
                style={{
                  background: `linear-gradient(135deg, ${colors.neonGreen} 0%, ${colors.electricBlue} 100%)`,
                  color: colors.white,
                }}
                className="px-6 py-3 rounded-full font-bold shadow-lg relative overflow-hidden group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(74, 222, 128, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Book Now</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            style={{ color: colors.darkGreen }}
            className="md:hidden p-2 rounded-lg bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ backgroundColor: "rgba(74, 222, 128, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu with animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col space-y-1 px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                      location.pathname === item.path
                        ? "bg-green-100 text-green-700"
                        : "hover:bg-green-50 hover:text-green-700"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    style={{
                      background: `linear-gradient(135deg, ${colors.neonGreen} 0%, ${colors.electricBlue} 100%)`,
                      color: colors.white,
                    }}
                    className="w-full py-3 px-4 rounded-full font-bold mt-2 shadow-md"
                    whileTap={{ scale: 0.95 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
