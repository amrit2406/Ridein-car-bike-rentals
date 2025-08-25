import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Bike,
  CalendarDays,
  Users,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle,
  Fuel,
} from "lucide-react";
import { FaMotorcycle, FaCar } from "react-icons/fa";

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

const cars = [
  {
    id: 1,
    name: "Tata Safari AT 2025",
    image: c1,
    features: "7 seats • Automatic • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.8,
    price12hrs: 3500,
    price24hrs: 4500,
  },
  {
    id: 2,
    name: "Suzuki Fronx",
    image: c2,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1700,
    price24hrs: 2200,
  },
  {
    id: 3,
    name: "Thar Roxx",
    image: c3,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 3500,
    price24hrs: 4200,
  },
  {
    id: 4,
    name: "Verna 1.5 Turbo SX",
    image: c4,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2100,
    price24hrs: 2800,
  },
  {
    id: 5,
    name: "MG Hector AT",
    image: c5,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2500,
    price24hrs: 3500,
  },
  {
    id: 6,
    name: "Skoda Slavia",
    image: c6,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2300,
    price24hrs: 3000,
  },
  {
    id: 7,
    name: "Suzuki Dzire 2025",
    image: c7,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1600,
    price24hrs: 2100,
  },
  {
    id: 8,
    name: "Nexon Dark AT",
    image: c8,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1900,
    price24hrs: 2500,
  },
  {
    id: 9,
    name: "i20",
    image: c9,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1700,
    price24hrs: 2200,
  },
  {
    id: 10,
    name: "Thar 4x4",
    image: c10,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 3200,
    price24hrs: 4000,
  },
  {
    id: 11,
    name: "Dzire",
    image: c11,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1400,
    price24hrs: 1800,
  },
  {
    id: 12,
    name: "Swift AT 2025",
    image: c12,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1700,
    price24hrs: 2200,
  },
  {
    id: 13,
    name: "VW Polo",
    image: c13,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1400,
    price24hrs: 1700,
  },
  {
    id: 14,
    name: "Suzuki Alto",
    image: c14,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1000,
    price24hrs: 1400,
  },
  {
    id: 15,
    name: "Suzuki Baleno",
    image: c15,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1500,
    price24hrs: 2000,
  },
  {
    id: 16,
    name: "Hyundai Verna",
    image: c16,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1800,
    price24hrs: 2300,
  },
  {
    id: 17,
    name: "Hyundai Creta",
    image: c17,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1800,
    price24hrs: 2400,
  },
  {
    id: 18,
    name: "Tigor",
    image: c18,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1400,
    price24hrs: 1800,
  },
  {
    id: 19,
    name: "Nexon Dark EV max",
    image: c19,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2100,
    price24hrs: 2800,
  },
  {
    id: 20,
    name: "Scorpio N",
    image: c20,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 3700,
    price24hrs: 4700,
  },
  {
    id: 21,
    name: "Seltos AT",
    image: c21,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2200,
    price24hrs: 3100,
  },
  {
    id: 22,
    name: "Venue",
    image: c22,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1800,
    price24hrs: 2400,
  },
  {
    id: 23,
    name: "XL6",
    image: c23,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2000,
    price24hrs: 2700,
  },
  {
    id: 24,
    name: "Punch",
    image: c24,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1600,
    price24hrs: 2000,
  },
  {
    id: 25,
    name: "Scorpio N 4x4",
    image: c25,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 4300,
    price24hrs: 4700,
  },
  {
    id: 26,
    name: "VW Jetta",
    image: c26,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 2200,
    price24hrs: 3200,
  },
  {
    id: 27,
    name: "XUV 700 AT",
    image: c27,
    features: "7 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 3800,
    price24hrs: 4800,
  },
  {
    id: 28,
    name: "Alcazar Turbo SX AT",
    image: c28,
    features: "6 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2500,
    price24hrs: 3500,
  },
  {
    id: 29,
    name: "Bolero Neo",
    image: c29,
    features: "7 seats • Manual • AC",
    type: "economy",
    fuel: "Diesel",
    rating: 4.7,
    price12hrs: 2000,
    price24hrs: 2500,
  },
  {
    id: 30,
    name: "Swift 2025",
    image: c12,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1500,
    price24hrs: 2000,
  },
  {
    id: 31,
    name: "Ertiga ZXI",
    image: c30,
    features: "7 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2100,
    price24hrs: 2800,
  },
  {
    id: 32,
    name: "Celerio 2025",
    image: c31,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 1200,
    price24hrs: 1800,
  },
  {
    id: 33,
    name: "Curvv 2025",
    image: c32,
    features: "5 seats • Manual • AC",
    type: "economy",
    fuel: "Petrol",
    rating: 4.7,
    price12hrs: 2100,
    price24hrs: 2800,
  },
];

const bikes = [
  {
    id: 1,
    name: "Honda Activa",
    image: b1,
    features: "2 seats • Manual • Cruiser",
    type: "cruiser",
    engine: "125cc",
    rating: 4.7,
    price12hrs: 490,
    price24hrs: 650,
  },
  {
    id: 2,
    name: "RE meteor 350",
    image: b2,
    features: "2 seats • Manual • Street",
    type: "street",
    engine: "350cc",
    rating: 4.6,
    price12hrs: 800,
    price24hrs: 1100,
  },
  {
    id: 3,
    name: "RE Contienental GT 650",
    image: b3,
    features: "2 seats • Manual • Street",
    type: "street",
    engine: "650cc",
    rating: 4.6,
    price12hrs: 1000,
    price24hrs: 1500,
  },
  {
    id: 4,
    name: "Aerox",
    image: b4,
    features: "2 seats • Manual • Street",
    type: "street",
    engine: "155cc",
    rating: 4.6,
    price12hrs: 550,
    price24hrs: 750,
  },
  {
    id: 5,
    name: "MT-15",
    image: b5,
    features: "2 seats • Manual • Street",
    type: "street",
    engine: "155cc",
    rating: 4.6,
    price12hrs: 600,
    price24hrs: 850,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerChildren = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const pulse = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.5,
    },
  },
};

const BookingPage = () => {
  const [activeTab, setActiveTab] = useState("cars");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    people: 1,
    notes: "",
  });

  const [pickupDateTime, setPickupDateTime] = useState("");
  const [dropDateTime, setDropDateTime] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleConfirm = () => {
    const summary = `
      Booking Request:

      Vehicle: ${selectedVehicle.name}
      Features: ${selectedVehicle.features}
      Pricing: ₹${selectedVehicle.price12hrs}/12hrs, ₹${
      selectedVehicle.price24hrs
    }/24hrs

      Pickup: ${pickupDateTime}
      Return: ${dropDateTime}

      Name: ${form.name}
      Email: ${form.email}
      Phone: ${form.phone}
      Passengers: ${form.people}
      ${form.notes ? `Notes: ${form.notes}` : ""}
      `.trim();

    window.open(
      `https://wa.me/919078713435?text=${encodeURIComponent(summary)}`,
      "_blank"
    ); // Replace with your WhatsApp number
    setIsSubmitted(true);

    setTimeout(() => {
      setForm({ name: "", email: "", phone: "", people: 1, notes: "" });
      setPickupDateTime("");
      setDropDateTime("");
      setSelectedVehicle(null);
      setIsSubmitted(false);
    }, 3000);
  };

  const VehicleCard = ({ vehicle, type }) => (
    <motion.div
      variants={fadeIn}
      whileHover="hover"
      className={`rounded-xl p-4 flex flex-col border-2 font-semibold transition-all overflow-hidden relative bg-white cursor-pointer ${
        selectedVehicle?.id === vehicle.id
          ? "border-green-500 bg-green-50"
          : "border-gray-200 hover:border-green-300"
      }`}
      onClick={() => setSelectedVehicle(vehicle)}
    >
      {selectedVehicle?.id === vehicle.id && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 bg-green-500 rounded-full p-1"
        >
          <CheckCircle className="w-4 h-4 text-white" />
        </motion.div>
      )}
      <div className="h-40 w-full mb-3 rounded-lg overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-gray-900 font-bold">{vehicle.name}</h3>
      <div className="text-green-600 font-semibold mt-1 flex gap-2">
        <span>₹{vehicle.price12hrs}/12hrs</span>
        <span>•</span>
        <span>₹{vehicle.price24hrs}/24hrs</span>
      </div>
      <p className="text-gray-500 text-sm mt-1">
        {vehicle.features.split("•")[0]}
      </p>
      <div className="flex items-center mt-3">
        <div className="flex items-center text-amber-500">
          <span className="text-sm font-bold mr-1">{vehicle.rating}</span>
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </div>
        {type === "car" ? (
          <div className="ml-auto flex items-center text-sm text-gray-500">
            <Fuel className="w-4 h-4 mr-1" />
            <span>{vehicle.fuel}</span>
          </div>
        ) : (
          <div className="ml-auto text-sm text-gray-500">
            <span>{vehicle.engine}</span>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544829099-...?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
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
            Reserve Your Ride
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Adventure
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Choose from our premium fleet of cars and bikes. Select your
            vehicle, fill in your details, and hit book—adventure awaits.
          </p>
        </motion.div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        {!selectedVehicle ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden p-4 sm:p-8"
          >
            {/* Heading */}
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                Choose Your Vehicle
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                Select your ride & pricing shown for 12hrs & 24hrs!
              </p>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("cars")}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                  activeTab === "cars"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaCar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Cars ({cars.length})</span>
                </div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("bikes")}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all ${
                  activeTab === "bikes"
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaMotorcycle className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Bikes ({bikes.length})</span>
                </div>
              </motion.button>
            </div>

            {/* Vehicles Grid */}
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              <AnimatePresence>
                {(activeTab === "cars" ? cars : bikes).map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    type={activeTab === "cars" ? "car" : "bike"}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden"
          >
            {/* Back */}
            <div className="p-4 sm:p-8 border-b border-gray-200">
              <button
                onClick={() => setSelectedVehicle(null)}
                className="flex items-center text-green-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to selection
              </button>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-lg overflow-hidden">
                  <img
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
                    {selectedVehicle.name}
                  </h2>
                  <div className="flex gap-2 text-green-600 font-semibold text-sm sm:text-base">
                    <span>₹{selectedVehicle.price12hrs}/12hrs</span>
                    <span>•</span>
                    <span>₹{selectedVehicle.price24hrs}/24hrs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form + Summary */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleConfirm();
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0"
            >
              {/* Booking Form */}
              <div className="p-4 sm:p-8 lg:p-12">
                <motion.h2
                  variants={fadeIn}
                  className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3"
                >
                  <div className="p-2 bg-blue-100 rounded-full">
                    <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </div>
                  Booking Details
                </motion.h2>

                <motion.div
                  variants={staggerChildren}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 sm:space-y-6"
                >
                  {/* Name */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <Mail className="w-4 h-4 text-green-600" />
                      Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </motion.div>

                  {/* Email */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <Mail className="w-4 h-4 text-green-600" />
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your email address"
                    />
                  </motion.div>

                  {/* Phone */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <Phone className="w-4 h-4 text-green-600" />
                      Phone*
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </motion.div>

                  {/* Passengers */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <Users className="w-4 h-4 text-green-600" />
                      Passengers*
                    </label>
                    <input
                      type="number"
                      name="people"
                      value={form.people}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </motion.div>

                  {/* Pickup */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <CalendarDays className="w-4 h-4 text-green-600" />
                      Pickup Date & Time*
                    </label>
                    <input
                      type="datetime-local"
                      name="pickupDateTime"
                      value={pickupDateTime}
                      onChange={(e) => setPickupDateTime(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </motion.div>

                  {/* Drop */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 flex items-center gap-2 text-sm sm:text-base">
                      <Clock className="w-4 h-4 text-green-600" />
                      Return Date & Time*
                    </label>
                    <input
                      type="datetime-local"
                      name="dropDateTime"
                      value={dropDateTime}
                      onChange={(e) => setDropDateTime(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    />
                  </motion.div>

                  {/* Notes */}
                  <motion.div variants={fadeIn}>
                    <label className="block font-semibold mb-1 sm:mb-2 text-gray-700 text-sm sm:text-base">
                      Special Requests / Notes
                    </label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Let us know anything important..."
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Booking Summary */}
              <div className="bg-gradient-to-b from-green-50 to-teal-50 p-4 sm:p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-gray-200 flex flex-col sticky top-0 lg:top-8">
                <motion.div className="flex-grow">
                  {/* Summary */}
                  <motion.div variants={fadeIn} className="mb-6 sm:mb-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <CalendarDays className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      Booking Summary
                    </h2>

                    {/* Vehicle */}
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <div className="flex gap-3 sm:gap-4">
                        <img
                          src={selectedVehicle.image}
                          alt={selectedVehicle.name}
                          className="rounded-md sm:rounded-lg w-20 h-20 sm:w-24 sm:h-24 object-cover"
                        />
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold">
                            {selectedVehicle.name}
                          </h3>
                          <p className="text-green-600 font-semibold mt-1 mb-2 text-sm sm:text-base">
                            ₹{selectedVehicle.price12hrs}/12hrs • ₹
                            {selectedVehicle.price24hrs}/24hrs
                          </p>
                          <p className="text-xs sm:text-sm text-gray-600">
                            {selectedVehicle.features}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Trip Details */}
                    <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        Trip Details
                      </h4>
                      <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                        <div className="py-2 flex justify-between">
                          <span>Passengers:</span>
                          <span>{form.people}</span>
                        </div>
                        <div className="py-2 flex justify-between">
                          <span>Pickup:</span>
                          <span>{pickupDateTime?.replace("T", " ")}</span>
                        </div>
                        <div className="py-2 flex justify-between">
                          <span>Return:</span>
                          <span>{dropDateTime?.replace("T", " ")}</span>
                        </div>
                        {form.notes && (
                          <div className="py-2 flex justify-between">
                            <span>Notes:</span>
                            <span>{form.notes}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4 sm:mt-6 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6">
                      <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                        Contact Info
                      </h4>
                      <div className="divide-y divide-gray-200 text-xs sm:text-sm">
                        <div className="py-2 flex justify-between">
                          <span>Name:</span>
                          <span>{form.name}</span>
                        </div>
                        <div className="py-2 flex justify-between">
                          <span>Email:</span>
                          <span>{form.email}</span>
                        </div>
                        <div className="py-2 flex justify-between">
                          <span>Phone:</span>
                          <span>{form.phone}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <AnimatePresence>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="rounded-lg bg-green-100 border border-green-200 p-4 sm:p-6 text-center text-green-700 mb-4 sm:mb-6"
                    >
                      <CheckCircle className="mx-auto mb-2 w-8 h-8 sm:w-10 sm:h-10" />
                      <p className="text-sm sm:text-base">
                        Booking sent! We'll contact you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.button
                      onClick={handleConfirm}
                      type="button"
                      disabled={
                        !form.name ||
                        !form.email ||
                        !form.phone ||
                        !form.people ||
                        !pickupDateTime ||
                        !dropDateTime
                      }
                      variants={pulse}
                      whileHover="hover"
                      className="mt-auto w-full rounded-lg sm:rounded-xl bg-gradient-to-r from-green-600 to-teal-600 px-4 sm:px-6 py-3 sm:py-4 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 sm:gap-3 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      Confirm Booking via WhatsApp
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        )}
      </section>
    </main>
  );
};

export default BookingPage;
