import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-prime p-2 rounded-lg">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MediCore Solutions</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of quality medical equipment and supplies. 
              Committed to excellence in healthcare solutions with full regulatory compliance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@medicore-solutions.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>123 Medical Plaza, Healthcare District, CA 90210</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-teal-light transition-colors">
                About Us
              </Link>
              <Link to="/products" className="block text-gray-300 hover:text-teal-light transition-colors">
                Products
              </Link>
              <Link to="/compliance" className="block text-gray-300 hover:text-teal-light transition-colors">
                Compliance
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-teal-light transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Medical Equipment</p>
              <p>Pharmaceutical Supplies</p>
              <p>Regulatory Compliance</p>
              <p>Supply Chain Management</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MediCore Solutions. All rights reserved. | FDA Registered | ISO 13485 Certified</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;