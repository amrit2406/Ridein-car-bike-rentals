import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Bike,
  Fuel,
  Users,
  Calendar,
  MapPin,
  Star,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import c9 from "../assets/c9.png";
import c10 from "../assets/c10.png";
import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";
import c13 from "../assets/c13.png";
import c14 from "../assets/c14.png";
import c15 from "../assets/c15.png";
import c16 from "../assets/c16.png";
import c17 from "../assets/c17.png";
import c18 from "../assets/c18.png";
import c19 from "../assets/c19.png";
import c20 from "../assets/c20.png";
import c21 from "../assets/c21.png";
import c22 from "../assets/c22.png";
import c23 from "../assets/c23.png";
import c24 from "../assets/c24.png";
import c25 from "../assets/c25.png";
import c26 from "../assets/c26.png";
import c27 from "../assets/c27.png";
import c28 from "../assets/c28.png";
import c29 from "../assets/c29.png";
import c30 from "../assets/c30.png";
import c31 from "../assets/c31.png";
import c32 from "../assets/c32.png";

import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import b5 from "../assets/b5.png";

const VehiclePage = () => {
  const [activeTab, setActiveTab] = useState("car");
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [filter, setFilter] = useState("all");

  const carList = [
    {
      id: 1,
      name: "Tata Safari AT 2025",
      features: "7 seats • Automatic • AC",
      price12hrs: "₹3500",
      price24hrs: "₹4500",
      image: c1,
      type: "suv",
      fuel: "Diesel",
      rating: 4.8,
      reviews: 124,
    },
    {
      id: 2,
      name: "Suzuki Fronx",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1700",
      price24hrs: "₹2200",
      image: c2,
      type: "economy",
      fuel: "Petrol",
      rating: 4.7,
      reviews: 98,
    },
    {
      id: 3,
      name: "Thar Roxx",
      features: "5 seats • Manual • Luxury",
      price12hrs: "₹3500",
      price24hrs: "₹4200",
      image: c3,
      type: "luxury",
      fuel: "Diesel",
      rating: 4.9,
      reviews: 67,
    },
    {
      id: 4,
      name: "Verna 1.5 Turbo SX",
      features: "5 seats • Manual • AC",
      price12hrs: "₹2100",
      price24hrs: "₹2800",
      image: c4,
      type: "premium",
      fuel: "Petrol",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: 5,
      name: "MG Hector AT",
      features: "5 seats • Autmatic • Luxury",
      price12hrs: "₹2500",
      price24hrs: "₹3500",
      image: c5,
      type: "sports",
      fuel: "Petrol",
      rating: 4.8,
      reviews: 156,
    },
    {
      id: 6,
      name: "Skoda Slavia",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹2300",
      price24hrs: "₹3000",
      image: c6,
      type: "sports",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 7,
      name: "Suzuki Dzire 2025",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1900",
      price24hrs: "₹2500",
      image: c7,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 8,
      name: "Nexon Dark AT",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹1900",
      price24hrs: "₹2500",
      image: c8,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 9,
      name: "i20",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1700",
      price24hrs: "₹2200",
      image: c9,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 10,
      name: "Thar 4x4",
      features: "4 seats • Manual • Luxury",
      price12hrs: "₹3200",
      price24hrs: "₹4000",
      image: c10,
      type: "luxury",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 11,
      name: "Dzire",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1400",
      price24hrs: "₹1800",
      image: c11,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 12,
      name: "Swift AT 2025",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1700",
      price24hrs: "₹2200",
      image: c12,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 13,
      name: "VW Polo",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1400",
      price24hrs: "₹1700",
      image: c13,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 14,
      name: "Suzuki Alto",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1000",
      price24hrs: "₹1400",
      image: c14,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 15,
      name: "Suzuki Baleno",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1500",
      price24hrs: "₹2000",
      image: c15,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 16,
      name: "Hyundai Verna",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1800",
      price24hrs: "₹2300",
      image: c16,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 17,
      name: "Hyundai Creta",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1800",
      price24hrs: "₹2400",
      image: c17,
      type: "economy",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 18,
      name: "Tigor",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1400",
      price24hrs: "₹1800",
      image: c18,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 19,
      name: "Nexon Dark EV max",
      features: "5 seats • Manual • EV",
      price12hrs: "₹2100",
      price24hrs: "₹2800",
      image: c19,
      type: "premium",
      fuel: "ev",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 20,
      name: "Scorpio N",
      features: "7 seats • Manual • Luxury",
      price12hrs: "₹3700",
      price24hrs: "₹4700",
      image: c20,
      type: "luxury",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 21,
      name: "Seltos AT",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹2200",
      price24hrs: "₹3100",
      image: c21,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 22,
      name: "Venue",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹1800",
      price24hrs: "₹2400",
      image: c22,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 23,
      name: "XL6",
      features: "6 seats • Manual • AC",
      price12hrs: "₹2000",
      price24hrs: "₹2700",
      image: c23,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 24,
      name: "Punch",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1600",
      price24hrs: "₹2000",
      image: c24,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 25,
      name: "Scorpio N 4x4",
      features: "7 seats • Automatic • AC",
      price12hrs: "₹4300",
      price24hrs: "₹4700",
      image: c25,
      type: "suv",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 26,
      name: "VW Jetta",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹2200",
      price24hrs: "₹3200",
      image: c26,
      type: "economy",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 27,
      name: "XUV 700 AT",
      features: "7 seats • Automatic • AC",
      price12hrs: "₹3800",
      price24hrs: "₹4800",
      image: c27,
      type: "economy",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 28,
      name: "Alcazar Turbo SX AT",
      features: "6 seats • Automatic • AC",
      price12hrs: "₹2500",
      price24hrs: "₹3500",
      image: c28,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 29,
      name: "Bolero Neo",
      features: "7 seats • Automatic • AC",
      price12hrs: "₹2000",
      price24hrs: "₹2500",
      image: c29,
      type: "economy",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 30,
      name: "Swift 2025",
      features: "5 seats • Automatic • AC",
      price12hrs: "₹1500",
      price24hrs: "₹2000",
      image: c12,
      type: "economy",
      fuel: "Diesel",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 31,
      name: "Ertiga ZXI",
      features: "7 seats • Manual • AC",
      price12hrs: "₹2100",
      price24hrs: "₹2800",
      image: c30,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 32,
      name: "Celerio 2025",
      features: "5 seats • Manual • AC",
      price12hrs: "₹1200",
      price24hrs: "₹1800",
      image: c31,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
    {
      id: 33,
      name: "Curvv 2025",
      features: "5 seats • Manual • AC",
      price12hrs: "₹2100",
      price24hrs: "₹2800",
      image: c32,
      type: "economy",
      fuel: "Petrol",
      rating: 4.6,
      reviews: 89,
    },
  ];

  const bikeList = [
    {
      id: 1,
      name: "Honda Activa",
      features: "2 seats • Manual • Cruiser",
      price: "₹490/12hrs",
      image: b1,
      type: "cruiser",
      engine: "125cc",
      rating: 4.7,
      reviews: 87,
    },
    {
      id: 2,
      name: "RE meteor 350",
      features: "2 seats • Manual • Street",
      price: "₹800/12hrs",
      image: b2,
      type: "street",
      engine: "350cc",
      rating: 4.6,
      reviews: 92,
    },
    {
      id: 3,
      name: "RE Contienental GT 650",
      features: "2 seats • Manual • Sport",
      price: "₹1000/12hrs",
      image: b3,
      type: "sports",
      engine: "650cc",
      rating: 4.8,
      reviews: 115,
    },
    {
      id: 4,
      name: "Aerox",
      features: "2 seats • Manual • Touring",
      price: "₹550/12hrs",
      image: b4,
      type: "touring",
      engine: "155cc",
      rating: 4.9,
      reviews: 64,
    },
    {
      id: 5,
      name: "MT-15",
      features: "2 seats • Manual • Adventure",
      price: "₹600/12hrs",
      image: b5,
      type: "adventure",
      engine: "155cc",
      rating: 4.7,
      reviews: 78,
    },
  ];

  const categories = {
    car: ["all", "economy", "luxury", "suv", "sports", "premium"],
    bike: ["all", "cruiser", "sports", "street", "touring", "adventure"],
  };

  const filteredVehicles = (activeTab === "car" ? carList : bikeList).filter(
    (vehicle) => filter === "all" || vehicle.type === filter
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  const VehicleCard = ({ vehicle, type }) => (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-gray-100"
      onClick={() => setSelectedVehicle(vehicle)}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <span className="text-sm font-semibold">{vehicle.rating}</span>
          <span className="text-xs text-gray-600">({vehicle.reviews})</span>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
          {vehicle.type}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
          {type === "car" ? (
            <Car className="w-6 h-6 text-green-600" />
          ) : (
            <Bike className="w-6 h-6 text-green-600" />
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          {type === "car" ? (
            <>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{vehicle.features.split("•")[0].trim()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Fuel className="w-4 h-4" />
                <span>{vehicle.fuel}</span>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-1">
              <span className="font-medium">{vehicle.engine}</span>
            </div>
          )}
        </div>

        {/* ✅ New price section */}
        <div className="flex justify-between items-center text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg p-2">
          <span>
            12hrs: <span className="text-green-600">{vehicle.price12hrs}</span>
          </span>
          <span>
            24hrs: <span className="text-blue-600">{vehicle.price24hrs}</span>
          </span>
        </div>

        <p className="text-gray-600 mb-6">{vehicle.features}</p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold text-green-600">{vehicle.price}</p>
            {/* <p className="text-sm text-gray-500">per day</p> */}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Our Fleet
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Vehicles
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Choose from our extensive fleet of self-drive cars and bikes. Enjoy
            the best comfort, style, and reliability for every journey.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 mt-10"
          >
            {[
              {
                icon: <Car className="w-5 h-5" />,
                text: `${carList.length}+ Cars`,
              },
              {
                icon: <Bike className="w-5 h-5" />,
                text: `${bikeList.length}+ Bikes`,
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                text: "Multiple Locations",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Filter and Tabs Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Tabs */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("car")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === "car"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  <span>Cars ({carList.length})</span>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("bike")}
                className={`px-8 py-3 rounded-full font-bold transition-all ${
                  activeTab === "bike"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5" />
                  <span>Bikes ({bikeList.length})</span>
                </div>
              </motion.button>
            </div>

            {/* Category Filter */}
            <div className="flex gap-3 flex-wrap">
              {categories[activeTab].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === category
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category === "all" ? "All" : category}
                </motion.button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search vehicles..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </motion.div>

        {/* Vehicle Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                type={activeTab}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredVehicles.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🚗</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No vehicles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your filters to see more options.
            </p>
          </motion.div>
        )}
      </section>

      {/* Bottom CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-28 max-w-4xl mx-auto px-6"
      >
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Hit the Road?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Book your perfect vehicle today and experience the freedom of the
            open road.
          </p>
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              <Calendar className="w-5 h-5" />
              Book Your Vehicle Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Vehicle Modal */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
            onClick={() => setSelectedVehicle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-lg sm:max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative h-40 sm:h-56 md:h-64 mb-4 sm:mb-6 rounded-lg sm:rounded-xl overflow-hidden">
                <img
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Title + Features */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {selectedVehicle.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                {selectedVehicle.features}
              </p>

              {/* Pricing + Rating */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Pricing */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">
                    Pricing
                  </h3>
                  <div className="flex justify-between text-lg sm:text-xl font-bold">
                    <span className="text-green-600">
                      12hrs: {selectedVehicle.price12hrs}
                    </span>
                    <span className="text-blue-600">
                      24hrs: {selectedVehicle.price24hrs}
                    </span>
                  </div>
                </div>

                {/* Rating */}
                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2">
                    Rating
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
                    <span className="text-lg sm:text-xl font-bold">
                      {selectedVehicle.rating}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                      ({selectedVehicle.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              {/* Button */}
              <Link to="/booking" className="w-full">
                <button className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold hover:bg-green-700 transition-colors">
                  Book This Vehicle
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default VehiclePage;
