import React from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/outline';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center h-[350px] bg-gray-100 mt-6">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold text-gray-800 w-20 h-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LockClosedIcon />
        </motion.h1>
        <motion.h2
          className="text-3xl font-semibold text-gray-600 mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Resource Not Found
        </motion.h2>
        <motion.p
          className="text-lg text-gray-500 mt-2"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        </motion.div>
      </div>
    </div>
  );
};

export default Custom404;
