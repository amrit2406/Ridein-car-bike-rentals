import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  Car,
  Bike,
  Phone,
  Mail,
  MapPin,
  Send,
  Shield,
  Heart,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/ri-logo2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo */}
              <img src={logo} alt="Logo" className="w-30 h-14" />

              {/* Existing icons */}
              {/* <div className="bg-green-600 p-2 rounded-xl">
                <div className="flex">
                  <Car size={20} className="text-white" />
                  <Bike size={20} className="text-white -ml-2" />
                </div>
              </div> */}

              {/* Text */}
              {/* <span className="text-2xl font-bold text-white">
                Ride<span className="text-green-500">in</span>
              </span> */}
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premium self-drive cars and bikes at your fingertips. Easy
              booking, flexible plans, and top-notch service for your next
              adventure.
            </p>
            <div className="flex items-center gap-2 text-green-400">
              <Shield size={16} />
              <span className="text-sm">Trusted by 10,000+ customers</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Vehicles", path: "/vehicles" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      to={item.path}
                      className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors group"
                    >
                      <div className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {item.name}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Contact Info
            </h4>
            <div className="space-y-4">
              <motion.a
                href="tel:+919348220395"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-600 transition-colors">
                  <Phone size={16} />
                </div>
                <span>+91 9348220395</span>
              </motion.a>

              <motion.a
                href="mailto:ridein.car.rental143@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-600 transition-colors">
                  <Mail size={16} />
                </div>
                <span>ridein.car.rental143@gmail.com</span>
              </motion.a>

              <motion.div
                className="flex items-center gap-3 text-gray-400 group"
                whileHover={{ x: 5 }}
              >
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-green-600 transition-colors">
                  <MapPin size={16} />
                </div>
                <span>Ganga Nagar, Bhimpur, Bhubaneswar, 751001</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates
            </p>

            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Send size={16} />
              </motion.button>
            </div>

            <div>
              <h5 className="text-white font-medium mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {[
                  {
                    icon: <FaFacebookF className="h-4 w-4" />,
                    color: "hover:bg-blue-600",
                  },
                  {
                    icon: <FaInstagram className="h-4 w-4" />,
                    color: "hover:bg-pink-600",
                  },
                  {
                    icon: <FaTwitter className="h-4 w-4" />,
                    color: "hover:bg-blue-400",
                  },
                  {
                    icon: <FaYoutube className="h-4 w-4" />,
                    color: "hover:bg-red-600",
                  },
                  {
                    icon: <FaLinkedin className="h-4 w-4" />,
                    color: "hover:bg-blue-700",
                  },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    className={`p-3 bg-gray-800 rounded-lg text-gray-400 transition-colors ${social.color} hover:text-white`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart size={14} className="text-red-400" fill="currentColor" />{" "}
              by Ridein Team
            </span>
          </div>

          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Ridein. All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            {/* <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a> */}
            <Link
              to="/terms"
              className="hover:text-green-400 transition-colors"
            >
              Terms & Condition
            </Link>
            {/* <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors"
              whileHover={{ y: -2 }}
            >
              Back to top <ArrowUp size={14} />
            </motion.button> */}
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      {/* <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="#contact"
          className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(74, 222, 128, 0.3)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={20} />
          <span className="font-semibold">Book Now</span>
        </motion.a>
      </motion.div> */}
    </footer>
  );
};

export default Footer;
