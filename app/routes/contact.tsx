import type { MetaFunction } from "@remix-run/node";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: "Contact Dream Abaya - Get in Touch With Us" },
    {
      name: "description",
      content:
        "Contact Dream Abaya for premium Islamic clothing. Reach us by phone, email, or visit our location in Ernakulam, Kerala. We're here to assist you with your modest fashion needs.",
    },
  ];
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#242424]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-[#cea36a]">Us</span>
          </h1>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#242424] mb-8">
                Get in Touch
              </h2>

              {/* Phone Numbers */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-[#cea36a] mt-1">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#242424] mb-2">
                      Phone
                    </h3>
                    <p className="text-gray-600">+91 9495997308</p>
                    <p className="text-gray-600">+91 7306203395</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="text-[#cea36a] mt-1">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#242424] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:8shahina8@gmail.com"
                    className="text-gray-600 hover:text-[#cea36a]"
                  >
                    8shahina8@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="text-[#cea36a] mt-1">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#242424] mb-2">
                    Address
                  </h3>
                  <address className="text-gray-600 not-italic">
                    Sharon Villa
                    <br />
                    Kanjiramattom P.O
                    <br />
                    Ernakulam, Kerala
                    <br />
                    India
                    <br />
                    PIN: 682315
                  </address>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-[#242424] mb-6">
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:border-[#cea36a] focus:ring-1 focus:ring-[#cea36a] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:border-[#cea36a] focus:ring-1 focus:ring-[#cea36a] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:border-[#cea36a] focus:ring-1 focus:ring-[#cea36a] outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#242424] text-white py-3 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#242424] mb-8">
            Our Location
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.037062435945!2d76.408281074783!3d9.84725427564494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0876f6aaaaaaab%3A0x24dcba3e08ddf0bd!2sSHARON%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1739210474353!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sharon Industries Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
