import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Intro: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/home');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-center mb-8"
      >
        Welcome to C++ Learning Platform
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl text-center text-muted-foreground mb-8"
      >
        Start your journey to master C++ programming
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col items-center space-y-4"
      >
        <p className="text-xl text-center">
          Practice coding in our integrated compiler and participate in contests hosted by us.
        </p>
        <button
          onClick={handleGetStarted}
          className="px-6 py-3 bg-primary hover:bg-primary-dark text-primary-foreground rounded-md text-xl"
        >
          Get Started
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Learn</h3>
            <p>Comprehensive tutorials and examples to help you learn C++ from scratch.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Practice</h3>
            <p>Use our integrated compiler to practice coding directly on the website.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">Compete</h3>
            <p>Participate in coding contests and challenge yourself to improve your skills.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Intro;