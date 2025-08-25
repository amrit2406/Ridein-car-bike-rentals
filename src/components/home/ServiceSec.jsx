import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Plane,
  Briefcase,
  Crown,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({
  image,
  title,
  description,
  index,
  isSelected,
  onClick,
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const iconMap = {
    "Self Drive": <Car size={32} className="text-green-600" />,
    "Airport Pickup": <Plane size={32} className="text-green-600" />,
    Corporate: <Briefcase size={32} className="text-green-600" />,
    "VIP Booking": <Crown size={32} className="text-green-600" />,
    Wedding: <Heart size={32} className="text-green-600" />,
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover="hover"
      onClick={onClick}
      className={`bg-white rounded-3xl p-8 flex flex-col cursor-pointer border-2 transition-all ${
        isSelected
          ? "border-green-500 shadow-2xl scale-105"
          : "border-gray-100 shadow-lg hover:shadow-xl"
      }`}
    >
      {/* Icon with background */}
      <div className="mb-6 flex justify-center">
        <div
          className={`p-4 rounded-2xl ${
            isSelected ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          {iconMap[title]}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center mb-6 flex-grow">{description}</p>

      {/* <motion.button
        whileHover={{ x: 5 }}
        className={`flex items-center justify-center font-medium ${
          isSelected ? "text-green-600" : "text-gray-500"
        }`}
      >
        Learn more
        <ArrowRight size={16} className="ml-1" />
      </motion.button> */}

      {/* Selection indicator */}
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 bg-green-500 text-white p-1 rounded-full"
        >
          <CheckCircle size={16} />
        </motion.div>
      )}
    </motion.div>
  );
};

const ServiceSection = () => {
  const [selectedService, setSelectedService] = useState(1);

  const services = [
    {
      id: 1,
      title: "Self Drive",
      description:
        "Enjoy the freedom to explore at your own pace with our flexible self-drive car and bike rentals.",
      features: [
        "24/7 vehicle access",
        "Multiple pickup locations",
        "Comprehensive insurance",
        "Free cancellation",
      ],
    },
    {
      id: 2,
      title: "Airport Pickup",
      description:
        "Reliable and comfortable airport transfers ensuring you reach your destination stress-free and on time.",
      features: [
        "Flight tracking",
        "Meet & greet service",
        "Complimentary water",
        "Free waiting time",
      ],
    },
    // {
    //   id: 3,
    //   title: "Corporate",
    //   description: "Professional corporate travel solutions tailored to meet your business needs with premium vehicles.",
    //   features: ["Dedicated account manager", "Monthly billing", "Priority support", "Customized reporting"]
    // },
    {
      id: 4,
      title: "VIP Booking",
      description:
        "Experience luxury and exclusivity with our VIP vehicle bookings and personalized services.",
      features: [
        "Luxury vehicle fleet",
        "Personal chauffeur",
        "Complimentary amenities",
        "Flexible scheduling",
      ],
    },
    {
      id: 5,
      title: "Wedding",
      description:
        "Make your special day unforgettable with elegant and stylish wedding car rentals.",
      features: [
        "Decorated vehicles",
        "Professional drivers",
        "On-time guarantee",
        "Flexible packages",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of premium vehicle rental services designed to
            meet all your transportation needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Services Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                {...service}
                index={index}
                isSelected={selectedService === service.id}
                onClick={() => setSelectedService(service.id)}
              />
            ))}
          </motion.div>

          {/* Feature Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
          >
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {selectedServiceData?.title} Features
              </h3>

              <div className="space-y-4 mb-8">
                {selectedServiceData?.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-green-100 p-2 rounded-full mt-1">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/booking"
                  className="block w-full bg-green-600 text-white py-4 rounded-xl font-bold shadow-md hover:bg-green-700 transition-colors text-center"
                >
                  Book This Service
                </Link>
              </motion.div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Need help choosing?</span> Our
                  team is available 24/7 to help you select the perfect service
                  for your needs.
                </p>
                <p className="mt-2 text-green-600 font-medium">
                  Call: +1 (234) 567-8900
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-gray-200"
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "500+", label: "Vehicles" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Locations" },
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

export default ServiceSection;
