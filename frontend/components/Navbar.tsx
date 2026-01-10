'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      className="
        fixed top-0 left-0 right-0 z-50
        bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-blue-900/20
        backdrop-blur-2xl border-b border-white/20
        shadow-lg shadow-purple-500/10
      "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo / Brand */}
        <Link
          href="/dashboard"
          className="
            text-3xl md:text-4xl font-black
            gradient-text
            hover:scale-105
            transition-all duration-300
            tracking-tight
          "
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          ✨ TaskFlow
        </Link>

        {/* User Section */}
        {user && (
          <div className="flex items-center space-x-4 md:space-x-6">
            <motion.span 
              className="hidden md:block text-gray-300 text-sm md:text-base"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Welcome,&nbsp;
              <span className="gradient-text font-semibold">
                {user.name || user.email}
              </span>
            </motion.span>

            {/* Avatar with gradient pulse effect */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              <div className="
                w-11 h-11 md:w-12 md:h-12 rounded-full
                bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
                flex items-center justify-center
                text-white font-bold text-base md:text-lg
                border-2 border-white/30
                hover:scale-110 hover:rotate-12
                transition-all duration-300
                shadow-lg shadow-purple-500/50
              ">
                {user.name
                  ? user.name.charAt(0).toUpperCase()
                  : user.email.charAt(0).toUpperCase()}
              </div>
              <div className="
                absolute inset-0 rounded-full
                bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500
                animate-ping opacity-30
              "></div>
            </motion.div>

            {/* Logout button */}
            <motion.button
              onClick={logout}
              className="
                px-5 py-2.5 rounded-xl text-sm font-semibold
                bg-white/10 hover:bg-white/20
                text-white border border-white/20
                hover:border-white/40
                transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/30
                hover:scale-105
              "
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Logout
            </motion.button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
