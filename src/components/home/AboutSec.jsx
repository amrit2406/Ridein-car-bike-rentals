import React from "react";
import { motion } from "framer-motion";
import { Car, Bike, MapPin, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images with Animation */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Car Image */}
            <motion.div
              variants={imageVariants}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl w-full"
            >
              <img
                src="https://www.malwamahindra.com/assets/img/model/xuv-700/big07.webp"
                alt="Luxury Car Interior"
                className="w-full h-[180px] sm:h-[400px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* On mobile shows below, on desktop absolute overlap */}
            <motion.div
              variants={imageVariants}
              className="hidden sm:block relative mt-4 sm:mt-0 sm:absolute sm:-bottom-46 sm:-right-8 sm:w-2/3 w-full rounded-2xl shadow-2xl border-4 border-white overflow-hidden"
            >
              <img
                src="https://cdn.bikedekho.com/processedimages/bajaj/bajaj-pulsar-220/source/bajaj-pulsar-220667d5dc076980.jpg"
                alt="Adventure Bike"
                className="w-full h-[120px] sm:h-[250px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Floating elements */}
            {/* On desktop - absolute as before, on mobile - stack to avoid overlap */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-green-600 text-white p-4 rounded-full shadow-lg absolute -top-5 -left-5
              sm:block block"
              style={{
                position: "absolute",
                top: "-20px",
                left: "-20px",
              }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="bg-white text-green-600 p-4 rounded-full shadow-lg border-2 border-green-600 absolute
              sm:-bottom-5 sm:left-10 bottom-2 left-2"
              style={{
                position: "absolute",
                bottom: "8px",
                left: "8px",
              }}
            >
              <Shield className="w-6 h-6" />
            </motion.div>
          </motion.div>

          {/* Right Side - Content with Animation */}
          <motion.div
            className="max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              About RideIn
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
            >
              Freedom with Self-Drive Cars & Bikes
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mb-6 text-lg leading-relaxed text-gray-700"
            >
              Discover the ultimate flexibility with our premium self-drive car
              and bike rentals. Whether you're planning a weekend getaway, a
              business trip, or simply exploring the city at your own pace, our
              fleet offers the perfect ride tailored to your needs.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-lg leading-relaxed text-gray-700"
            >
              Enjoy the thrill of the open road with full control over your
              journey. Our seamless booking process and competitive pricing make
              it easier than ever to get behind the wheel or handlebars with
              confidence and convenience.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                {
                  icon: <Car className="w-5 h-5" />,
                  text: "Wide selection of well-maintained vehicles",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  text: "Flexible rental durations",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  text: "Multiple pickup locations",
                },
                {
                  icon: <Shield className="w-5 h-5" />,
                  text: "24/7 roadside assistance",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <span className="bg-green-100 p-2 rounded-full text-green-600">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              {/* Explore Our Fleet Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/vehicles" // 👈 Update with your route path
                  className="px-6 py-3 bg-green-600 text-white font-medium rounded-full shadow-md hover:bg-green-700 transition-colors inline-block"
                >
                  Explore Our Fleet
                </Link>
              </motion.div>

              {/* Contact Us Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact" // 👈 Update with your route path
                  className="px-6 py-3 bg-white text-green-600 font-medium rounded-full shadow-md border border-green-600 hover:bg-green-50 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-200"
        >
          {[
            { number: "500+", label: "Vehicles" },
            { number: "50+", label: "Locations" },
            { number: "10K+", label: "Happy Customers" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-green-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
