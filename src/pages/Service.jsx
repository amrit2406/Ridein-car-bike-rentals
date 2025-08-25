import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Car,
  Plane,
  Crown,
  Heart,
  ArrowRight,
  Calendar,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      id: "self-drive",
      title: "Self Drive",
      description:
        "Freedom and flexibility on every journey. Choose from our premium fleet of well-maintained cars and bikes, and drive yourself at your pace—zero hassle, full control.",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      icon: <Car className="w-8 h-8" />,
      features: [
        "24/7 Access",
        "Multiple Locations",
        "Flexible Duration",
        "Comprehensive Insurance",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      description:
        "Start or end your journey conveniently with our reliable airport pickup and drop services. Punctual, professional, and comfortable—every time.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      icon: <Plane className="w-8 h-8" />,
      features: [
        "Flight Tracking",
        "Meet & Greet",
        "Complimentary Water",
        "Free Waiting Time",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      id: "vip-booking",
      title: "VIP Booking",
      description:
        "Arrive in style with our exclusive VIP booking options. Luxury cars, reserved drivers, and personalized attention—perfect for special occasions and important guests.",
      image:
        "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      icon: <Crown className="w-8 h-8" />,
      features: [
        "Luxury Fleet",
        "Professional Chauffeurs",
        "Personalized Service",
        "Priority Support",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "wedding",
      title: "Wedding",
      description:
        "Make your day even more memorable with our elegant wedding car rentals. Beautifully decorated vehicles and tailored packages for picture-perfect arrivals.",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Decorated Vehicles",
        "Professional Drivers",
        "On-Time Guarantee",
        "Flexible Packages",
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
    },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
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

  const handleServiceClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

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
            Premium Services
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Services
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Ridein offers a range of premium, hassle-free services for every
            kind of journey. Choose what fits your needs and travel with comfort
            and confidence.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 mt-10"
          >
            {[
              { icon: <Car className="w-5 h-5" />, text: "50+ Vehicles" },
              { icon: <Shield className="w-5 h-5" />, text: "Full Insurance" },
              {
                icon: <Star className="w-5 h-5" fill="currentColor" />,
                text: "5-Star Rated",
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

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full border border-gray-100 transition-all duration-300 group-hover:shadow-2xl">
                {/* Image with overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                  {/* Service Icon */}
                  <motion.div
                    className={`absolute top-6 right-6 p-3 rounded-xl ${service.bgColor}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>

              {/* Floating element */}
              {hoveredService === index && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-400 to-orange-400 text-white p-2 rounded-full shadow-lg"
                >
                  <Zap size={16} fill="currentColor" />
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mt-28"
      >
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Vehicles",
                icon: <Car className="w-8 h-8" />,
              },
              {
                number: "10K+",
                label: "Happy Customers",
                icon: <Heart className="w-8 h-8" fill="currentColor" />,
              },
              {
                number: "24/7",
                label: "Support",
                icon: <Shield className="w-8 h-8" />,
              },
              {
                number: "98%",
                label: "Satisfaction",
                icon: <Star className="w-8 h-8" fill="currentColor" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center mt-28 max-w-4xl mx-auto px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to experience{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
            premium service
          </span>
          ?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Contact us today and let us help you choose the perfect service for
          your needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Book Now Button */}
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </motion.button>
          </Link>

          {/* Contact Us Button */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-50 transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
};

export default ServicePage;
