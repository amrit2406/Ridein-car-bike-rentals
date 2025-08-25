import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Fuel, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";

import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";

// Updated VehicleCard
const VehicleCard = ({
  type,
  name,
  seats,
  fuel,
  price12,
  price24,
  rating,
  delay,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10 }}
      className="group border-2 border-green-200 hover:shadow-green-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all bg-white flex flex-col relative"
    >
      {/* Popular Badge */}
      {rating > 4.5 && (
        <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          Popular
        </div>
      )}

      {/* Image Section */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-grow">
        {/* <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <div className="flex items-center bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            <span>★</span>
            <span className="ml-1">{rating}</span>
          </div>
        </div> */}

        <div className="flex gap-4 mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Users size={16} className="mr-1" />
            <span>{seats} seats</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Fuel size={16} className="mr-1" />
            <span>{fuel}</span>
          </div>
        </div>

        {/* Prices */}
        <div className="flex gap-4 mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-semibold">
            12 hrs: {price12}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
            24 hrs: {price24}
          </span>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition-colors"
            >
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Updated VehicleSection
const VehicleSection = () => {
  const [activeTab, setActiveTab] = useState("cars");

  const cars = [
    {
      id: 1,
      name: "Tata Safari AT 2025",
      seats: 7,
      fuel: "Diesel",
      price12: "₹3500",
      price24: "₹4500",
      rating: 4.8,
      image: c1,
    },
    {
      id: 2,
      name: "Suzuki Fronx",
      seats: 5,
      fuel: "Petrol",
      price12: "₹1700",
      price24: "₹2200",
      rating: 4.7,
      image: c2,
    },
    {
      id: 3,
      name: "Thar Roxx",
      seats: 5,
      fuel: "Diesel",
      price12: "₹3500",
      price24: "₹4200",
      rating: 4.9,
      image: c3,
    },
    {
      id: 4,
      name: "Verna 1.5 Turbo SX",
      seats: 5,
      fuel: "Petrol",
      price12: "₹2100",
      price24: "₹2800",
      rating: 4.9,
      image: c4,
    },
    {
      id: 5,
      name: "MG Hector AT",
      seats: 5,
      fuel: "Petrol",
      price12: "₹2500",
      price24: "₹3500",
      rating: 4.9,
      image: c5,
    },
    {
      id: 6,
      name: "Skoda Slavia",
      seats: 5,
      fuel: "Petrol",
      price12: "₹2300",
      price24: "₹3000",
      rating: 4.9,
      image: c6,
    },
  ];

  const bikes = [
    {
      id: 1,
      name: "Honda Activa",
      seats: 2,
      fuel: "Petrol",
      price12: "₹490",
      price24: "₹650",
      rating: 4.7,
      image: b1,
    },
    {
      id: 2,
      name: "RE meteor 350",
      seats: 2,
      fuel: "Petrol",
      price12: "₹800",
      price24: "₹1100",
      rating: 4.6,
      image: b2,
    },
    {
      id: 3,
      name: "RE Contienental GT 650",
      seats: 2,
      fuel: "Petrol",
      price12: "₹1000",
      price24: "₹1500",
      rating: 4.8,
      image: b3,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Vehicle Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our premium selection of cars and bikes for your next
            adventure
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab("cars")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "cars"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600"
              }`}
            >
              Cars
            </button>
            <button
              onClick={() => setActiveTab("bikes")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeTab === "bikes"
                  ? "bg-green-600 text-white shadow-md"
                  : "text-gray-600"
              }`}
            >
              Bikes
            </button>
          </div>
        </motion.div>

        {/* Vehicle Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {(activeTab === "cars" ? cars : bikes).map((vehicle, index) => (
            <VehicleCard key={vehicle.id} {...vehicle} delay={index * 0.1} />
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/vehicles">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto"
            >
              Explore All Vehicles
              <ArrowRight size={20} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VehicleSection;
