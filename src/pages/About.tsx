import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Executive Officer",
      description: "25+ years in healthcare management",
      image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      description: "Expert in medical device integration",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Dr. Lisa Rodriguez",
      position: "Head of Compliance",
      description: "Former FDA regulatory specialist",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Started with a vision to improve healthcare supply chains" },
    { year: "2012", title: "FDA Registration", description: "Achieved full FDA compliance and registration" },
    { year: "2015", title: "International Expansion", description: "Extended operations across North America" },
    { year: "2018", title: "ISO Certification", description: "Obtained ISO 13485 quality management certification" },
    { year: "2020", title: "Digital Transformation", description: "Launched digital platform for seamless ordering" },
    { year: "2025", title: "Market Leader", description: "Recognized as industry leader in medical supply chain" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue to-teal-prime text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About MediCore Solutions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Transforming healthcare through reliable supply chain solutions and unwavering commitment to quality since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010, MediCore Solutions emerged from a simple yet powerful vision: to bridge the gap between 
                healthcare providers and essential medical supplies through reliable, compliant, and innovative solutions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small distribution company has evolved into a comprehensive healthcare supply chain partner, 
                serving hospitals, clinics, and healthcare facilities across North America with unwavering commitment to quality and compliance.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a trusted partner to leading healthcare institutions, maintaining the highest standards 
                of safety, efficacy, and regulatory compliance in everything we do.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3825585/pexels-photo-3825585.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical facility"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="bg-teal-prime p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide healthcare facilities with reliable access to quality medical equipment and supplies, 
                ensuring patient safety through rigorous compliance standards and exceptional service delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="bg-blue p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted healthcare supply chain partner, recognized for innovation, integrity, 
                and unwavering commitment to improving patient outcomes through superior products and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-light"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`bg-white rounded-xl p-6 shadow-lg max-w-md ${
                  index % 2 === 0 ? 'mr-8' : 'ml-8'
                }`}>
                  <div className="flex items-center mb-4">
                    <span className="bg-teal-prime text-white px-3 py-1 rounded-full text-sm font-bold">
                      {milestone.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-teal-prime rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals driving innovation in healthcare supply chain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-prime font-semibold mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Maintaining the highest standards of quality and regulatory compliance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "FDA Registered", icon: <Award className="h-8 w-8" /> },
              { title: "ISO 13485 Certified", icon: <Globe className="h-8 w-8" /> },
              { title: "GMP Compliant", icon: <Heart className="h-8 w-8" /> },
              { title: "HIPAA Compliant", icon: <Users className="h-8 w-8" /> }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-teal-light/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4 text-teal-prime">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{cert.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;