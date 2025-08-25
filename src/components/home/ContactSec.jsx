import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactUs = () => {
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

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our car and bike rentals? We're here to help
            and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-green-100 rounded-full">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Send us a message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="message"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold px-6 py-4 rounded-xl shadow-md hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Call Us
                    </h3>
                    <p className="text-gray-700">+91 9078713435</p>
                    <p className="text-gray-700">+91 9348880533</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 bg-green-100 rounded-full flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-700 break-words">
                      ridein.car.rental143@gmail.com
                    </p>
                    {/* <p className="text-gray-700">support@ridein.com</p> */}
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Visit Us
                    </h3>
                    <p className="text-gray-700">Ganga Nagar, Bhimpur</p>
                    <p className="text-gray-700"> Bhubaneswar, 751001</p>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-700">Mon-Sat: 8:00 AM - 8:00 PM</p>
                    {/* <p className="text-gray-700">Sat: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-700">Sun: Closed</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Why Choose RideIn?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-200 font-bold">✓</span>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 font-bold">✓</span>
                  <span>Flexible Rental Periods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 font-bold">✓</span>
                  <span>No Hidden Fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-200 font-bold">✓</span>
                  <span>Free Cancellation Up To 24 Hours</span>
                </li>
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quick Response Time
              </h3>
              <p className="text-gray-700">
                We typically respond to all inquiries within 2 business hours
                during our operating times.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
