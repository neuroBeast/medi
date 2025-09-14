import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck, Users, Globe, Lock } from 'lucide-react';

const Compliance = () => {
  const certifications = [
    {
      title: "FDA Registration",
      description: "Fully registered with the U.S. Food and Drug Administration as a medical device distributor",
      icon: <Shield className="h-8 w-8" />,
      details: ["Registration Number: 12345678", "Valid through: December 2025", "Annual renewal maintained"]
    },
    {
      title: "ISO 13485:2016",
      description: "Quality management system for medical devices design and manufacturing",
      icon: <Award className="h-8 w-8" />,
      details: ["Certified since 2015", "Annual surveillance audits", "Zero non-conformities in 2024"]
    },
    {
      title: "Good Distribution Practice",
      description: "GDP compliance ensuring quality throughout the supply chain",
      icon: <FileCheck className="h-8 w-8" />,
      details: ["Temperature-controlled storage", "Chain of custody documentation", "Validated shipping processes"]
    },
    {
      title: "HIPAA Compliance",
      description: "Healthcare data privacy and security compliance program",
      icon: <Lock className="h-8 w-8" />,
      details: ["Staff training programs", "Secure data handling", "Privacy impact assessments"]
    }
  ];

  const qualityProcesses = [
    {
      title: "Supplier Qualification",
      description: "Rigorous vetting of all suppliers and manufacturers",
      steps: ["Due diligence verification", "Quality system audits", "Regulatory compliance verification", "Ongoing monitoring"]
    },
    {
      title: "Product Authentication",
      description: "Multi-layer verification of product authenticity and integrity",
      steps: ["Certificate of analysis review", "Physical inspection", "Batch record verification", "Chain of custody tracking"]
    },
    {
      title: "Quality Control",
      description: "Comprehensive QC testing and documentation",
      steps: ["Incoming inspection", "Storage condition monitoring", "Stability testing", "Pre-shipment verification"]
    }
  ];

  const regulations = [
    {
      agency: "FDA (Food and Drug Administration)",
      regulations: [
        "21 CFR Part 820 - Quality System Regulation",
        "21 CFR Part 211 - Current Good Manufacturing Practice",
        "21 CFR Part 803 - Medical Device Reporting"
      ]
    },
    {
      agency: "DEA (Drug Enforcement Administration)",
      regulations: [
        "Schedule II-V Controlled Substances",
        "Recordkeeping Requirements",
        "Security Requirements"
      ]
    },
    {
      agency: "International Standards",
      regulations: [
        "ISO 13485 - Medical Device Quality Management",
        "ISO 14971 - Risk Management for Medical Devices",
        "ICH Guidelines - International Council for Harmonisation"
      ]
    }
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
              Compliance & Licensing
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Maintaining the highest standards of regulatory compliance and quality assurance in medical supply distribution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading certifications ensuring the highest quality and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-light-gray rounded-xl p-8 shadow-lg"
              >
                <div className="bg-teal-prime text-white p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600 mb-6">{cert.description}</p>
                <div className="space-y-2">
                  {cert.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-teal-prime rounded-full mr-3"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Processes */}
      <section className="py-16 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Assurance Processes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive quality management from source to delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {qualityProcesses.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                <p className="text-gray-600 mb-6">{process.description}</p>
                <div className="space-y-3">
                  {process.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <span className="bg-teal-prime text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">
                        {stepIndex + 1}
                      </span>
                      <span className="text-sm text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Framework */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Regulatory Compliance Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Adherence to all applicable federal and international regulations
            </p>
          </motion.div>

          <div className="space-y-8">
            {regulations.map((reg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-light-gray rounded-xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reg.agency}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {reg.regulations.map((regulation, regIndex) => (
                    <div key={regIndex} className="bg-white p-4 rounded-lg">
                      <p className="text-sm text-gray-600">{regulation}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain Security */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Supply Chain Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensuring product integrity and safety throughout the entire supply chain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Secure Storage",
                description: "Climate-controlled facilities with 24/7 security monitoring"
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Global Traceability",
                description: "End-to-end tracking from manufacturer to end user"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Qualified Personnel",
                description: "Trained and certified staff handling all operations"
              },
              {
                icon: <FileCheck className="h-8 w-8" />,
                title: "Documentation",
                description: "Complete audit trail and batch record maintenance"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-teal-prime p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Compliance */}
      <section className="py-16 bg-teal-prime text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compliance Questions?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our compliance team is available to discuss regulatory requirements and provide documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:compliance@medicore-solutions.com"
                className="bg-white text-teal-prime px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Email Compliance Team
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-prime transition-colors duration-200"
              >
                Call Our Experts
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Compliance;