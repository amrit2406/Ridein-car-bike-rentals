import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  CheckCircle,
  Clock,
  Users,
  MapPin,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const ServiceDetailPage = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Service data - same as in your service page
  const services = [
    {
      id: "self-drive",
      title: "Self Drive",
      description: "Freedom and flexibility on every journey. Choose from our premium fleet of well-maintained cars and bikes, and drive yourself at your pace—zero hassle, full control.",
      image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
      icon: <Car className="w-8 h-8" />,
      features: ["24/7 Access", "Multiple Locations", "Flexible Duration", "Comprehensive Insurance"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      detailedDescription: "Experience the ultimate freedom with our self-drive service. Whether you need a vehicle for a quick errand, a weekend getaway, or an extended road trip, we have the perfect car or bike for your needs. Our fleet is meticulously maintained and regularly serviced to ensure your safety and comfort.",
      detailedFeatures: [
        {
          title: "Wide Vehicle Selection",
          description: "Choose from economy cars, SUVs, luxury vehicles, and motorcycles to suit your needs and budget."
        },
        {
          title: "Easy Booking Process",
          description: "Book your vehicle in minutes through our user-friendly app or website with instant confirmation."
        },
        {
          title: "Flexible Rental Periods",
          description: "Rent by the hour, day, week, or month with no long-term commitments required."
        },
        {
          title: "24/7 Roadside Assistance",
          description: "Travel with peace of mind knowing our support team is available around the clock."
        }
      ],
      pricing: [
        { type: "Economy Cars", price: "$35/day", features: ["5 seats", "AC", "Fuel efficient"] },
        { type: "SUVs", price: "$65/day", features: ["7 seats", "Spacious", "All-terrain"] },
        { type: "Luxury Vehicles", price: "$120/day", features: ["Premium comfort", "Advanced features", "Style"] },
        { type: "Motorcycles", price: "$25/day", features: ["Fuel efficient", "Easy parking", "Thrill of riding"] }
      ],
      process: [
        "Book online or via app",
        "Verify your license",
        "Pick up your vehicle",
        "Enjoy your journey",
        "Return and pay"
      ]
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      description: "Start or end your journey conveniently with our reliable airport pickup and drop services. Punctual, professional, and comfortable—every time.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      icon: <Plane className="w-8 h-8" />,
      features: ["Flight Tracking", "Meet & Greet", "Complimentary Water", "Free Waiting Time"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
      detailedDescription: "Make your travel experience seamless with our professional airport transfer services. We monitor your flight in real-time to adjust for delays, ensuring your driver is always there when you arrive. Enjoy a stress-free transition from airport to destination.",
      detailedFeatures: [
        {
          title: "Flight Monitoring",
          description: "We track your flight status to adjust pickup times for early or delayed arrivals."
        },
        {
          title: "Meet & Greet Service",
          description: "Your driver will meet you at arrivals with a personalized sign for easy identification."
        },
        {
          title: "Complimentary Amenities",
          description: "Enjoy bottled water, phone charging, and WiFi during your ride."
        },
        {
          title: "Luggage Assistance",
          description: "Our professional drivers will help with your luggage from curb to vehicle."
        }
      ],
      pricing: [
        { type: "Standard Sedan", price: "$45/trip", features: ["4 passengers", "2 suitcases", "Comfortable"] },
        { type: "Premium SUV", price: "$75/trip", features: ["6 passengers", "4 suitcases", "Spacious"] },
        { type: "Luxury Vehicle", price: "$95/trip", features: ["4 passengers", "3 suitcases", "Premium experience"] },
        { type: "Group Van", price: "$120/trip", features: ["10 passengers", "8 suitcases", "Ideal for groups"] }
      ],
      process: [
        "Provide flight details",
        "Receive confirmation",
        "Meet driver at arrivals",
        "Relax during ride",
        "Arrive refreshed"
      ]
    },
    {
      id: "vip-booking",
      title: "VIP Booking",
      description: "Arrive in style with our exclusive VIP booking options. Luxury cars, reserved drivers, and personalized attention—perfect for special occasions and important guests.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
      icon: <Crown className="w-8 h-8" />,
      features: ["Luxury Fleet", "Professional Chauffeurs", "Personalized Service", "Priority Support"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      detailedDescription: "Elevate your travel experience with our premium VIP service. Designed for discerning clients who expect nothing but the best, our VIP service offers luxury vehicles, professional chauffeurs, and personalized attention to detail for corporate events, special occasions, or simply indulging in luxury.",
      detailedFeatures: [
        {
          title: "Executive Fleet",
          description: "Choose from high-end luxury sedans, SUVs, and limousines for your travel needs."
        },
        {
          title: "Professional Chauffeurs",
          description: "Our drivers are trained in etiquette, discretion, and navigation for a premium experience."
        },
        {
          title: "Personalized Service",
          description: "Customize your ride with specific temperature preferences, music choices, and route preferences."
        },
        {
          title: "Complementary Extras",
          description: "Enjoy premium amenities including refreshments, newspapers, and phone chargers."
        }
      ],
      pricing: [
        { type: "Executive Sedan", price: "$85/hour", features: ["4 passengers", "Luxury comfort", "Professional driver"] },
        { type: "Premium SUV", price: "$110/hour", features: ["6 passengers", "Spacious interior", "All amenities"] },
        { type: "Luxury Limousine", price: "$150/hour", features: ["8 passengers", "Entertainment system", "Premium bar"] },
        { type: "Corporate Package", price: "Custom quote", features: ["Multiple vehicles", "Dedicated coordinator", "Customized service"] }
      ],
      process: [
        "Consultation with specialist",
        "Custom itinerary planning",
        "Vehicle selection",
        "Enjoy premium service",
        "Billing with detailed receipt"
      ]
    },
    {
      id: "wedding",
      title: "Wedding",
      description: "Make your day even more memorable with our elegant wedding car rentals. Beautifully decorated vehicles and tailored packages for picture-perfect arrivals.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      icon: <Heart className="w-8 h-8" />,
      features: ["Decorated Vehicles", "Professional Drivers", "On-Time Guarantee", "Flexible Packages"],
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-500/10",
      detailedDescription: "Create unforgettable memories on your special day with our wedding transportation services. From classic vintage cars to modern luxury vehicles, we offer a range of options to match your wedding theme and ensure you arrive in style. Our experienced drivers understand the importance of timing and elegance for your wedding day.",
      detailedFeatures: [
        {
          title: "Bridal Fleet Selection",
          description: "Choose from classic cars, vintage models, luxury sedans, or stretch limousines."
        },
        {
          title: "Custom Decorations",
          description: "Personalize your vehicle with ribbons, flowers, and just-married signs to match your theme."
        },
        {
          title: "Professional Wedding Drivers",
          description: "Our drivers are experienced in wedding logistics and timing to ensure a seamless experience."
        },
        {
          title: "Flexible Packages",
          description: "Choose from hourly, half-day, or full-day packages to suit your wedding schedule."
        }
      ],
      pricing: [
        { type: "Classic Wedding Car", price: "$250/4 hours", features: ["Bridal decoration", "Chauffeur", "Photo opportunities"] },
        { type: "Luxury Wedding Sedan", price: "$350/4 hours", features: ["Premium vehicle", "Red carpet service", "Complimentary champagne"] },
        { type: "Bridal Party Limousine", price: "$450/4 hours", features: ["8 passengers", "Entertainment system", "Spacious interior"] },
        { type: "Full Wedding Package", price: "Custom quote", features: ["Multiple vehicles", "Coordinated timing", "Special decorations"] }
      ],
      process: [
        "Consultation for needs",
        "Vehicle selection & decoration",
        "Timing coordination",
        "Special day execution",
        "Beautiful memories created"
      ]
    }
  ];

  // Find the current service based on ID
  const service = services.find(s => s.id === serviceId) || services[0];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tabHover = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const pulse = {
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    }
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
          <motion.button
            onClick={() => navigate(-1)}
            whileHover={{ x: -5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </motion.button>
          
          <div className={`p-3 rounded-full inline-flex mb-6 ${service.bgColor}`}>
            {service.icon}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {service.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">Service</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </motion.div>
      </section>

      {/* Service Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-6 mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            {["overview", "pricing", "process", "benefits"].map((tab) => (
              <motion.button
                key={tab}
                variants={tabHover}
                whileHover="hover"
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all capitalize ${
                  activeTab === tab 
                    ? `bg-gradient-to-r ${service.color} text-white shadow-md` 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab === "overview" && "Overview"}
                {tab === "pricing" && "Pricing & Packages"}
                {tab === "process" && "How It Works"}
                {tab === "benefits" && "Benefits"}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Service Details */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Service Image */}
                <div className="relative h-80 lg:h-full">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-gray-200">{service.description}</p>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h3>
                  <p className="text-gray-600 text-lg mb-8">{service.detailedDescription}</p>
                  
                  <div className="mb-10">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      Key Features
                    </h4>
                    
                    <motion.div 
                      className="grid grid-cols-1 gap-6"
                      variants={staggerChildren}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {service.detailedFeatures.map((feature, index) => (
                        <motion.div 
                          key={index}
                          variants={fadeIn}
                          className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                        >
                          <div className="p-2 bg-white rounded-lg shadow-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-900">{feature.title}</h5>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "pricing" && (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pricing & Packages</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.pricing.map((packageItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <h4 className="font-bold text-gray-900 text-lg mb-3">{packageItem.type}</h4>
                    <div className="text-2xl font-bold text-green-600 mb-4">{packageItem.price}</div>
                    
                    <ul className="space-y-2 mb-6">
                      {packageItem.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover="hover"
                      variants={pulse}
                      className={`w-full bg-gradient-to-r ${service.color} text-white py-3 rounded-xl font-semibold`}
                    >
                      Select Package
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "process" && (
            <motion.div
              key="process"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h3>
              
              <div className="relative">
                {/* Process Timeline */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 transform translate-x-6"></div>
                
                <div className="space-y-12">
                  {service.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-6"
                    >
                      <div className="relative">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold z-10 relative ${service.bgColor}`}>
                          <span className={`text-xl bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                            {index + 1}
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <h4 className="font-semibold text-gray-900 text-lg mb-2">Step {index + 1}</h4>
                        <p className="text-gray-600">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "benefits" && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Our {service.title} Service?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    Peace of Mind
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Fully insured vehicles for your protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 customer support for any issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Regular vehicle maintenance and safety checks</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <Zap className="w-6 h-6 text-amber-500" />
                    Convenience
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Easy online booking with instant confirmation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Multiple pickup locations across the city</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Flexible rental periods to suit your schedule</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <Star className="w-6 h-6 text-amber-400" fill="currentColor" />
                    Quality Assurance
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Premium, well-maintained vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Professional and verified drivers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Stringent cleanliness and hygiene standards</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-500" fill="currentColor" />
                    Customer Care
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Dedicated support for special requests</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Loyalty programs and discounts for regular customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Easy cancellation and modification policies</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-28 max-w-4xl mx-auto px-6"
      >
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Book Our {service.title} Service?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Contact us today and let us provide you with an exceptional experience tailored to your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-white hover:text-green-600 transition-all flex items-center gap-2 justify-center"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default ServiceDetailPage;