import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Bike, Calendar, Clock } from "lucide-react";
import { FaMotorcycle, FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";
import c from "../../assets/car.png";
import b from "../../assets/bike.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";
import c10 from "../../assets/c10.png";
import c11 from "../../assets/c11.png";
import c12 from "../../assets/c12.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";
import b5 from "../../assets/b5.png";

const HeroSection = () => {
  const [vehicleType, setVehicleType] = useState("car");
  const [serviceType, setServiceType] = useState("self-drive");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("airport-parking");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const availableVehicles = [
    {
      id: 1,
      name: "Suzuki Dzire 2025",
      type: "car",
      price12: "₹1600",
      price24: "₹2100",
      seats: 5,
      available: true,
      image: c7,
    },
    {
      id: 2,
      name: "Nexon Dark AT",
      type: "car",
      price12: "₹1900",
      price24: "₹2500",
      seats: 5,
      available: true,
      image: c8,
    },
    {
      id: 3,
      name: "i20",
      type: "car",
      price12: "₹1700",
      price24: "₹2200",
      seats: 5,
      available: true,
      image: c9,
    },
    {
      id: 4,
      name: "Thar 4x4",
      type: "car",
      price12: "₹3200",
      price24: "₹4000",
      seats: 4,
      available: true,
      image: c10,
    },
    {
      id: 5,
      name: "Dzire",
      type: "car",
      price12: "₹1400",
      price24: "₹1800",
      seats: 5,
      available: true,
      image: c11,
    },
    {
      id: 6,
      name: "Swift AT 2025",
      type: "car",
      price12: "₹1700",
      price24: "₹2200",
      seats: 5,
      available: true,
      image: c12,
    },
    {
      id: 7,
      name: "RE Contienental GT 650",
      type: "bike",
      price12: "₹1000",
      price24: "₹1500",
      seats: 2,
      available: true,
      image: b3,
    },
    {
      id: 8,
      name: "Aerox",
      type: "bike",
      price12: "₹550",
      price24: "₹750",
      seats: 2,
      available: true,
      image: b4,
    },
    {
      id: 9,
      name: "MT-15",
      type: "bike",
      price12: "₹600",
      price24: "₹850",
      seats: 2,
      available: true,
      image: b5,
    },
  ];

  return (
    <section className="relative py-2 bg-gray-900 overflow-hidden text-gray-100 font-sans">
      {/* Neon Green Abstract Background Elements */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-[#4ADE80] rounded-full mix-blend-overlay filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/3 pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#22c55e] rounded-full mix-blend-overlay filter blur-2xl opacity-30 translate-x-1/3 translate-y-1/4 pointer-events-none z-0"></div> */}

      <div className="relative container mx-auto max-w-7xl px-6 py-10 flex flex-col lg:flex-row gap-16">
        {/* Left Side - Content + Images + Info */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-8 lg:space-y-6 px-4 sm:px-6 lg:pr-12 z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug sm:leading-tight tracking-tight text-white">
              Rent Your Perfect <span className="text-green-400">Ride</span>{" "}
              Today
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-full md:max-w-lg mt-4 sm:mt-6">
              Discover a premium collection of cars and bikes ready for your
              next adventure. Experience seamless booking with flexible plans
              and superb pricing.
            </p>
          </motion.div>

          {/* Vehicles Images */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <img
              src={c}
              alt="Self Drive Car"
              className="w-full h-40 sm:h-52 md:h-80 object-contain rounded-xl shadow-lg"
            />
            {/* <img
              src={b}
              alt="Self Drive Bike"
              className="w-full h-40 sm:h-52 md:h-60 object-contain rounded-xl shadow-lg"
            /> */}
          </div>
        </div>

        {/* Right Side - Booking Form Card */}
        <div className="w-full lg:w-1/2 bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-8 ring-1 ring-[#4ADE80] z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-xl sm:text-2xl font-bold text-[#4ADE80] mb-4 sm:mb-5 border-b border-green-500 pb-1 sm:pb-2"
          >
            Book Your Vehicle
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 text-gray-200"
          >
            {/* Vehicle Type Toggle */}
            <div>
              <label className="block mb-1 sm:mb-2 font-semibold tracking-wide">
                Vehicle Type
              </label>
              <div className="flex flex-col sm:flex-row rounded-lg overflow-hidden border border-green-500 bg-gray-900">
                <button
                  type="button"
                  onClick={() => setVehicleType("car")}
                  className={`flex-grow py-2 px-4 sm:px-6 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base transition ${
                    vehicleType === "car"
                      ? "bg-[#4ADE80] text-gray-900 shadow"
                      : "bg-gray-700 text-green-300 hover:bg-[#4ADE80] hover:text-gray-900"
                  }`}
                >
                  <FaCar size={16} />
                  Car
                </button>
                <button
                  type="button"
                  onClick={() => setVehicleType("bike")}
                  className={`flex-grow py-2 px-4 sm:px-6 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base transition ${
                    vehicleType === "bike"
                      ? "bg-[#4ADE80] text-gray-900 shadow"
                      : "bg-gray-700 text-green-300 hover:bg-[#4ADE80] hover:text-gray-900"
                  }`}
                >
                  <FaMotorcycle size={16} />
                  Bike
                </button>
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label
                htmlFor="pickupLocation"
                className="block mb-1 sm:mb-2 font-semibold tracking-wide"
              >
                Pickup Location
              </label>
              <select
                id="pickupLocation"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full p-2 sm:p-3 bg-gray-700 border border-green-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ADE80] text-sm sm:text-base"
              >
                <option value="airport-parking">Airport Parking</option>
                <option value="ridein-car-parking">RideIn Car Parking</option>
              </select>
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-300">
              <div>
                <label className="block mb-1 font-semibold tracking-wide">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-2 text-green-400"
                    size={16}
                  />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-9 sm:pl-10 p-2 sm:p-3 bg-gray-700 border border-green-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold tracking-wide">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-2 text-green-400"
                    size={16}
                  />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-9 sm:pl-10 p-2 sm:p-3 bg-gray-700 border border-green-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold tracking-wide">
                  Drop-off Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-2 text-green-400"
                    size={16}
                  />
                  <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                    className="w-full pl-9 sm:pl-10 p-2 sm:p-3 bg-gray-700 border border-green-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold tracking-wide">
                  Drop-off Time
                </label>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-2 text-green-400"
                    size={16}
                  />
                  <input
                    type="time"
                    value={dropoffTime}
                    onChange={(e) => setDropoffTime(e.target.value)}
                    className="w-full pl-9 sm:pl-10 p-2 sm:p-3 bg-gray-700 border border-green-500 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4ADE80]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 sm:py-3.5 rounded-xl bg-[#4ADE80] text-white font-bold text-base sm:text-lg shadow-md hover:bg-green-400 transition-colors"
            >
              Find Available Vehicles
            </button>
          </form>
        </div>
      </div>

      {showResults && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10 ring-1 ring-green-600 z-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl font-bold mb-10 text-[#4ADE80] border-b border-green-500 pb-4">
            Available {vehicleType === "car" ? "Cars" : "Bikes"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {availableVehicles
              .filter((v) => v.type === vehicleType && v.available)
              .map((vehicle) => (
                <motion.div
                  key={vehicle.id}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 25px 35px rgba(72, 187, 120, 0.5)",
                  }}
                  className="border border-green-700 rounded-3xl overflow-hidden bg-gray-900 shadow-lg transition-shadow"
                >
                  <div className="h-46 flex items-center justify-center bg-white">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-40 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-extrabold mb-3 text-gray-100 truncate">
                      {vehicle.name}
                    </h3>

                    {/* Seats + Price (12 hrs / 24 hrs) */}
                    <div className="flex flex-col gap-2 mb-8 text-gray-300 font-semibold text-lg">
                      <div className="flex justify-between items-center">
                        <span>{vehicle.seats} seats</span>
                        <span>12 hrs: {vehicle.price12}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span></span>
                        <span>24 hrs: {vehicle.price24}</span>
                      </div>
                    </div>

                    <Link
                      to="/booking"
                      className="block text-center w-full py-4 rounded-2xl bg-[#4ADE80] text-gray-900 font-extrabold hover:bg-green-400 transition-shadow shadow-xl"
                    >
                      Book Now
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
