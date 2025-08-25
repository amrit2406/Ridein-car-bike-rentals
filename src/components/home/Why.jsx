import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  ThumbsUp,
  UserCheck,
  Star,
  Award,
  Heart,
  Zap,
  Car,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      id: 1,
      title: "Trusted Quality",
      description:
        "All our vehicles are regularly inspected and maintained for your safety and comfort.",
      icon: <ShieldCheck size={40} />,
      stats: "500+ Well Maintained Vehicles",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "24/7 Support",
      description:
        "Our customer service team is always available to assist you anytime, anywhere.",
      icon: <Clock size={40} />,
      stats: "Round the Clock Assistance",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
    },
    {
      id: 3,
      title: "Affordable Pricing",
      description:
        "Get competitive rates with transparent pricing and no hidden fees.",
      icon: <ThumbsUp size={40} />,
      stats: "No Hidden Charges",
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-600",
    },
    {
      id: 4,
      title: "Professional Drivers",
      description:
        "Qualified and experienced drivers to ensure a smooth and safe ride if required.",
      icon: <UserCheck size={40} />,
      stats: "100+ Certified Drivers",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -15,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/20"
          >
            Why Choose RideIn
          </motion.span>

          <h2 className="text-5xl font-bold text-white mb-6">
            Experience The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
              Difference
            </span>
          </h2>

          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            We go the extra mile to ensure your journey is safe, comfortable,
            and memorable
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredCard(reason.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <div
                className={`h-full bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all ${
                  hoveredCard === reason.id ? "bg-white/10 border-white/20" : ""
                }`}
              >
                {/* Icon Container */}
                <motion.div
                  variants={iconVariants}
                  className={`w-20 h-20 rounded-2xl ${reason.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:shadow-lg transition-all`}
                >
                  <div className={reason.textColor}>{reason.icon}</div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {reason.title}
                </h3>

                <p className="text-teal-100 text-center mb-6">
                  {reason.description}
                </p>

                <div className="text-center">
                  <span className="inline-block bg-white/10 text-teal-200 text-sm font-medium px-4 py-2 rounded-full">
                    {reason.stats}
                  </span>
                </div>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: hoveredCard === reason.id ? "100%" : 0 }}
                  className="h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mt-6 transition-all"
                />
              </div>

              {/* Floating Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: hoveredCard === reason.id ? 1 : 0,
                  y: hoveredCard === reason.id ? 0 : 20,
                }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-full shadow-lg"
              >
                <Star size={16} fill="currentColor" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/10"
        >
          {[
            {
              number: "10K+",
              label: "Happy Customers",
              icon: <Heart size={20} className="text-pink-400" />,
            },
            {
              number: "500+",
              label: "Vehicles",
              icon: <Car size={20} className="text-blue-400" />,
            },
            {
              number: "24/7",
              label: "Support",
              icon: <Clock size={20} className="text-green-400" />,
            },
            {
              number: "50+",
              label: "Locations",
              icon: <MapPin size={20} className="text-amber-400" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-teal-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Book Your Ride Now
            </motion.button>
          </Link>

          <p className="text-teal-200 mt-4">
            Join thousands of satisfied customers who trust RideIn for their
            journeys
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
