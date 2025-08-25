import React from "react";
import { motion } from "framer-motion";
import {
  Car,
  Bike,
  Users,
  Shield,
  Star,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/home/Why";
import FAQSection from "../components/home/Faq";

const AboutPage = () => {
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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const teamMembers = [
    {
      name: "Jessica Smith",
      role: "Founder & CEO",
      photo:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Leading Ridein with a passion for innovation and excellence.",
      social: ["twitter", "linkedin", "instagram"],
    },
    {
      name: "David Lee",
      role: "Operations Manager",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Ensuring your rental experience is seamless and reliable.",
      social: ["twitter", "linkedin"],
    },
    {
      name: "Sophia Patel",
      role: "Customer Support Lead",
      photo:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      bio: "Committed to keeping customers happy 24/7.",
      social: ["twitter", "linkedin", "instagram"],
    },
  ];

  const values = [
    {
      title: "Customer Focus",
      description:
        "Putting our customers at the heart of everything we do – listening, innovating, and delivering value.",
      icon: <Heart className="w-8 h-8 text-pink-500" fill="currentColor" />,
      color: "bg-pink-50",
    },
    {
      title: "Integrity & Transparency",
      description:
        "Being honest and clear in our policies, pricing, and processes.",
      icon: <Shield className="w-8 h-8 text-blue-500" fill="currentColor" />,
      color: "bg-blue-50",
    },
    {
      title: "Safety & Quality",
      description:
        "Offering rigorously maintained vehicles and dependable service to ensure peace of mind.",
      icon: <Star className="w-8 h-8 text-amber-500" fill="currentColor" />,
      color: "bg-amber-50",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

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
            About Ridein
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Drive Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Freedom
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Welcome to Ridein, your trusted partner for premium self-drive car
            and bike rentals. Seamless booking, flexible plans, and a passion
            for delivering unmatched travel freedom.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center gap-6 mt-10"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <Car className="w-5 h-5" />
              <span>50+ Vehicles</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <Bike className="w-5 h-5" />
              <span>25+ Locations</span>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <Users className="w-5 h-5" />
              <span>10K+ Customers</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={itemVariants}
            className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Journey
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Story
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            Founded on the principle of empowering your journeys, Ridein started
            with a simple vision – to provide accessible and reliable self-drive
            vehicles for everyone. From cityscapes to countryside roads, we
            enable you to explore on your terms.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Our fleet ranges from compact cars to powerful bikes, maintained
            rigorously to ensure safety and comfort. We believe that flexibility
            shouldn't come at the cost of quality, and every booking experience
            should be as smooth as the ride itself.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 mt-8">
            <Link to="/vehicles">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-green-700 transition-colors"
              >
                Explore Our Fleet
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-green-600 text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80"
              alt="About Ridein"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="absolute -top-5 -right-5 bg-green-600 text-white p-4 rounded-full shadow-lg"
          >
            <Zap size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 my-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at Ridein
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${value.color} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all`}
            >
              <div className="flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {value.title}
              </h3>
              <p className="text-gray-700 text-center">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <WhyChooseUs />
      <FAQSection />

      {/* Team Section */}
      {/* <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-28">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate people behind Ridein's success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-green-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700 mb-6">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  {member.social.map((platform) => (
                    <motion.button
                      key={platform}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition-colors"
                    >
                      <span className="font-semibold text-xs">{platform[0].toUpperCase()}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section> */}

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
            Ridein in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Vehicles" },
              { number: "25+", label: "Locations" },
              { number: "10K+", label: "Happy Customers" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-green-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AboutPage;
