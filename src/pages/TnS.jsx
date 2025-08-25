import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Clock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const TermsAndConditions = () => {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="relative py-28 px-6 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 z-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            Legal Information
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Terms &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-green-300">
              Conditions
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By
            booking with Ridein, you agree to comply with these terms.
          </p>
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6 mt-10"
          >
            {[
              {
                icon: <FileText className="w-5 h-5" />,
                text: "Last Updated: Jan 15, 2024",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                text: "Legal Compliance",
              },
              { icon: <Clock className="w-5 h-5" />, text: "Review Carefully" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </section>

      {/* Simple Terms Content */}
      <section className="max-w-7xl mx-auto px-2 lg:px-8 mt-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="rounded-2xl p-4"
        >
          {/* <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h2> */}

          <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>
              The Customer agrees and acknowledges that the use of the services
              offered by Drivo is at the sole risk of the Customer. The
              liability of Drivo is excluded to the fullest extent permitted by
              law. Customer can rent a vehicle under Drivo platform for Tourist
              Purposes.
            </li>

            <li>
              Documents:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Driving license and Aadhar Card, Voter Id Issued by Authority
                  or Institution.
                </li>
                <li>
                  Local IDs/Students must carry their Job/College/Institution ID
                  Card for Address Proof.
                </li>
                <li>
                  Without Job/College ID, no Local IDs are eligible to rent a
                  car under Drivo Platform.
                </li>
                <li>
                  Mail your Driving license, Aadhar Card Copy or Other ID & Live
                  Photo to <span className="text-green-600">ridein.car.rental143@gmail.com</span>{" "}
                  for pre-verification.
                </li>
                <li>
                  In absence of valid documents, booking will be cancelled and
                  Rs.500/- is deductible from total amount paid.
                </li>
                <li>
                  If there are co-drivers, they must provide relevant documents
                  at booking. Absence of a valid license leads to cancellation
                  and forfeiture of deposit.
                </li>
              </ul>
            </li>

            <li>
              Age Requirement:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Minimum 21 years for Normal vehicles.</li>
                <li>Minimum 24 years for Premium Range vehicles.</li>
              </ul>
            </li>

            <li>
              Over Speeding charges (Exceeding 80km/hr):
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Penalty of Rs.200 on first instance.</li>
                <li>Additional Rs.500 each time from the second instance.</li>
                <li>Multiple overspeeding = security deposit forfeited.</li>
              </ul>
            </li>

            <li>
              Refundable Security Deposit (Payable at Site):
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>₹3000 for Cars & Bikes.</li>
                <li>₹10,000 for Premium Range Vehicles.</li>
                <li>
                  Payment modes: Cash, Paytm, PhonePe, Google Pay, Card, Online.
                </li>
                <li>Refund as per mode of payment.</li>
                <li>
                  In case of violations, refund/adjustment within 24 hrs after
                  drop.
                </li>
              </ul>
            </li>

            <li>
              Kilometers Limitation:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Unlimited kms for Normal range vehicles.</li>
                <li>180 kms / 24 hrs for Premium range, extra ₹30/km.</li>
                <li>
                  Outside Odisha must be informed in advance or ₹5000 penalty.
                  Limited to 500 kms (one side).
                </li>
                <li>Unlimited kms only for bookings ≥ 24 hrs.</li>
                <li>
                  12 hrs booking limited to 98 kms, extra ₹12/km thereafter.
                </li>
              </ul>
            </li>

            <li>
              Prohibited Use:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  No arms, ammunition, banned drugs, pets, or commercial use.
                </li>
                <li>No speed racing, towing, or taxi services.</li>
                <li>No driving under alcohol/drugs.</li>
                <li>
                  Only renter is authorized. Unauthorized driver = ₹5000 fine +
                  forfeiture of deposit.
                </li>
                <li>Smoking/Drinking inside car = ₹2000 fine.</li>
                <li>
                  Car must be returned in same condition or ₹300 washing charge.
                </li>
                <li>
                  Restricted locations: Similipal, Phulbani, Joda, Barbil,
                  Koraput, Malkangiri, Rayagada, Sambalpur, Rourkela.
                </li>
              </ul>
            </li>

            <li>
              Roadside Assistance: Support provided, but costs charged if breach
              of terms.
            </li>

            <li>
              Late Charges:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Exceeding time without notice = ₹500 fine + per hour charges
                  (₹150 Hatchback, ₹200 Sedan, ₹250 SUV).
                </li>
                <li>Extensions subject to availability.</li>
              </ul>
            </li>

            <li>
              Insurance & Damage charges:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Customer responsible for damages up to ₹95,000 (Normal) /
                  ₹10,00,000 (Premium).
                </li>
                <li>
                  Insurance claim applicable above ₹75,000 (Normal) / ₹90,000
                  (Premium).
                </li>
                <li>Mechanical faults covered by RideIn.</li>
                <li>Claims ₹50,000 rental continues until repair duration.</li>
              </ul>
            </li>

            <li>Vehicles may be tracked via telematics for security.</li>
            <li>Drivo may terminate booking anytime without notice.</li>

            <li>
              Home / Airport Delivery:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Airport Delivery free (8AM–8PM).</li>
                <li>Home Delivery ₹500 within 15 km radius.</li>
              </ul>
            </li>

            <li>
              Cancellation Policy:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  75% refund if cancelled 48 hrs, 50% refund 48–24 hrs, 25%
                  refund 24 hrs.
                </li>
                <li>₹500 deduction for change/swapping vehicle.</li>
                <li>No-show after 6 hrs = no refund.</li>
                <li>Refund within 7 working days.</li>
                <li>
                  No refund for early returns or offline booking (₹500 deposit).
                </li>
              </ul>
            </li>

            <li>
              Working Hours: 6AM–11PM.
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  If replacement vehicle is costlier, customer must pay
                  difference.
                </li>
              </ul>
            </li>

            <li>
              Fuel Policy:
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>
                  Return car with same fuel level, else refueling charges apply.
                </li>
                <li>Excess refueling not reimbursed.</li>
              </ul>
            </li>

            <li>
              In case of questions/complaints, mail us at{" "}
              <span className="text-green-600">ridein.car.rental143@gmail.com</span>
            </li>
          </ol>
        </motion.div>
      </section>

      {/* Footer / Acknowledgement */}
      {/* <section className="max-w-4xl mx-auto px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            Last updated: January 15, 2024
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            I Understand These Terms
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-700 mb-2">Questions about our Terms?</p>
          <button className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all">
            Contact Legal Department
          </button>
        </div>
      </section> */}
    </main>
  );
};

export default TermsAndConditions;
