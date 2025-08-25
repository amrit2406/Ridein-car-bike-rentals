import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alisha Patra",
    role: "Frequent Traveler",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    message:
      "Renting a car through this service was seamless and affordable. Loved the flexible self-drive options!",
  },
  {
    id: 2,
    name: "Madan Kumar",
    role: "Business Professional",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    message:
      "Excellent service and well-maintained vehicles. The airport pickup saved me so much time!",
  },
  {
    id: 3,
    name: "Sonali Mishra",
    role: "Bride-to-be",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    message:
      "The wedding car rental was elegant and perfect for my big day. Highly recommend their VIP services!",
  },
  {
    id: 4,
    name: "Amlan Nayak",
    role: "Adventure Seeker",
    photo: "https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
    message:
      "The bike rental made my trip amazing. Great pricing and smooth booking experience.",
  },
];

const TestimonialSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Don't just take our word for it - hear from people who've experienced our service
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="py-4"
          >
            {testimonials.map(({ id, name, role, photo, message }) => (
              <SwiperSlide key={id}>
                <motion.div
                  variants={itemVariants}
                  className="h-full"
                >
                  <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-center mx-4 h-full border border-green-100 transition-all duration-300 hover:shadow-2xl hover:border-green-300">
                    <div className="relative mb-6">
                      <img
                        src={photo}
                        alt={name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 shadow-md">
                        <Quote className="text-white w-5 h-5" />
                      </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <p className="text-gray-700 italic mb-6 text-center relative">
                        <span className="absolute -top-4 left-0 text-4xl text-green-200 opacity-50">"</span>
                        {message}
                        <span className="absolute -bottom-6 right-0 text-4xl text-green-200 opacity-50">"</span>
                      </p>
                      
                      <div className="mt-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                        <p className="text-green-600 font-medium">{role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mt-6">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;