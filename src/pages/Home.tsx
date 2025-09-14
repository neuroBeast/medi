import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Truck, Users, Award, ChevronRight, Heart, Microscope, Pill } from 'lucide-react';

const Home = () => {
  const categories = [
    {
      title: "Medical Equipment",
      description: "State-of-the-art diagnostic and therapeutic equipment",
      icon: <Microscope className="h-8 w-8" />,
      color: "bg-blue text-white"
    },
    {
      title: "Pharmaceutical Supplies",
      description: "Quality medications and pharmaceutical products",
      icon: <Pill className="h-8 w-8" />,
      color: "bg-teal-prime text-white"
    },
    {
      title: "Healthcare Solutions",
      description: "Comprehensive healthcare management systems",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-orange text-white"
    }
  ];

  const features = [
    {
      icon: <Shield className="h-12 w-12 text-teal-prime" />,
      title: "FDA Compliance",
      description: "Full regulatory compliance and certification"
    },
    {
      icon: <Truck className="h-12 w-12 text-teal-prime" />,
      title: "Reliable Supply Chain",
      description: "Trusted global distribution network"
    },
    {
      icon: <Users className="h-12 w-12 text-teal-prime" />,
      title: "Expert Support",
      description: "Dedicated customer service and technical support"
    },
    {
      icon: <Award className="h-12 w-12 text-teal-prime" />,
      title: "Quality Assured",
      description: "ISO 13485 certified quality management"
    }
  ];

  const partners = [
    "Johnson & Johnson",
    "Pfizer",
    "Abbott Laboratories",
    "Medtronic",
    "Boston Scientific",
    "Siemens Healthineers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-prime to-teal-light text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Healthcare Excellence
              <br />
              <span className="text-teal-light">You Can Trust</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading provider of medical equipment and pharmaceutical supplies with over 15 years of experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-white text-teal-prime px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                View Products <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-prime transition-colors duration-200"
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions across multiple specialties
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediCore Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by healthcare professionals worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Working with leading pharmaceutical and medical device companies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-sm font-medium text-gray-800">{partner}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-prime text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your medical supply and equipment needs
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-prime px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
            >
              Get Started Today <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;