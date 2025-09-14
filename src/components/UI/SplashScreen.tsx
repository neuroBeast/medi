import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-teal-prime to-teal-light flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="bg-white p-8 rounded-2xl shadow-2xl">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-4"
          >
            <Stethoscope className="h-16 w-16 text-teal-prime" />
          </motion.div>
          <h1 className="text-3xl font-bold text-teal-prime mb-2">MediCore Solutions</h1>
          <p className="text-gray-600">Healthcare Excellence Since 2010</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;