'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAut } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const HomePage = () => {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEfect(() => {
    if (!loading) {
      if (user) {
        router.push('/dashboard');
      } else {
        router.push('/signin');
      }
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center particle-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center p-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-white/20 max-w-md">
        <motion.div
          animate={{
            rotate: [0, 10, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
          className="text-7xl mb-6"
        >
          ✨
        </motion.div>

        <h1 className="text-6xl font-black mb-4 gradient-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
          TaskFlow
        </h1>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center space-x-2 text-gray-300"
        >
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </motion.div>
      

        <p className="text-gray-400 mt-4">Loading your workspace...</p>
      </div>
    </div>
  );
};

export default HomePage;
