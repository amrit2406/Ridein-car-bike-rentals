import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! Thank you, we will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
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

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

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
            Get In Touch
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Connect
            </span>
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions or need help? Reach out to the Ridein team — we're
            here for you!
          </p>
        </motion.div>
      </section>

      {/* Contact Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerChildren}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Left: Form */}
          <motion.div variants={fadeIn}>
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-3 bg-green-100 rounded-full">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={pulse}
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Info Cards, Hours, Map */}
          <motion.div variants={fadeIn} className="space-y-6 sm:space-y-8">
            {/* Contact Info Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {/* Phone */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex items-center gap-4 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-base sm:text-lg text-gray-900 font-semibold">
                    Call Us
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    +91 9078713435
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    +91 9348880533
                  </p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex items-center gap-4 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <div className="min-w-0">
                  {" "}
                  {/* 👈 allows wrapping */}
                  <p className="text-base sm:text-lg text-gray-900 font-semibold">
                    Email
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 break-words">
                    ridein.car.rental143@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Address (full width on sm+) */}
              <motion.div
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg flex items-center gap-4 border border-gray-100 hover:shadow-md transition-all col-span-1 sm:col-span-2"
              >
                <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-base sm:text-lg text-gray-900 font-semibold">
                    Address
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Ganga Nagar, Bhimpur, Bhubaneswar, 751001
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-4 sm:p-6 border border-gray-100"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <div className="p-2 bg-amber-100 rounded-full">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm sm:text-base">
                <p className="text-gray-600 flex justify-between">
                  <span>Monday - Saturday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </p>
                {/* <p className="text-gray-600 flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </p> */}
                {/* <p className="text-gray-600 flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </p> */}
              </div>
            </motion.div>

            {/* Map/Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
              <iframe
                title="Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14386.825337711496!2d85.81427609264146!3d20.262404905917087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a76eab0117e7%3A0x7caff86869c541d6!2sGanga%20Nagar%2C%20Bhubaneswar%2C%20Odisha!5e1!3m2!1sen!2sin!4v1755774765571!5m2!1sen!2sin"
                width="100%"
                height="200"
                className="block sm:h-[250px]"
                loading="lazy"
                style={{ border: 0 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 lg:px-8 mt-28"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our vehicle rental
            services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What documents do I need to rent a vehicle?",
              answer:
                "You'll need a valid driver's license, a credit card, and proof of insurance.",
            },
            {
              question: "What is your cancellation policy?",
              answer:
                "You can cancel up to 24 hours before your reservation for a full refund.",
            },
            {
              question: "Do you offer long-term rentals?",
              answer:
                "Yes, we offer discounted rates for rentals longer than one week.",
            },
            {
              question: "Are there any age restrictions?",
              answer:
                "Renters must be at least 21 years old with a valid driver's license.",
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
};

export default ContactPage;
