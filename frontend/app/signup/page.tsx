'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { signup } from '../../lib/api';
import GlassCard from '../../components/GlassCard';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signup({ email, password, name });
      toast.success('Account created successfully!');
      router.push('/signin');
    } catch (error) {
      console.error('Signup error:', error);
      toast.error('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center particle-bg p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <GlassCard className="p-10 rounded-3xl border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl">
          {/* Logo/Icon */}
          <div className="text-center mb-8">
            <motion.div
              className="inline-block text-6xl mb-4"
              animate={{
                rotate: [0, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              🚀
            </motion.div>
            <h1 className="text-4xl font-black gradient-text mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Join TaskFlow
            </h1>
            <p className="text-gray-400 text-sm">
              Start your productivity journey today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Full Name"
                  className="
                    w-full px-12 py-4 rounded-xl
                    bg-white/5 border-2 border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                    transition-all duration-300
                    group-hover:border-white/20
                  "
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-purple-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="
                    w-full px-12 py-4 rounded-xl
                    bg-white/5 border-2 border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                    transition-all duration-300
                    group-hover:border-white/20
                  "
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-purple-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="••••••••"
                  className="
                    w-full px-12 py-4 rounded-xl
                    bg-white/5 border-2 border-white/10
                    text-white placeholder-gray-500
                    focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20
                    transition-all duration-300
                    group-hover:border-white/20
                  "
                />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-purple-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400 transition-colors text-xl"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
            </div>

            {/* Terms */}
            <label className="flex items-start text-sm text-gray-300 cursor-pointer group">
              <input
                type="checkbox"
                required
                className="mt-1 mr-3 w-4 h-4 rounded border-2 border-purple-500/50 bg-white/5 text-purple-600 focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
              />
              <span className="group-hover:text-white transition-colors">
                I agree to the{' '}
                <Link
                  href="/terms-and-conditions"
                  className="gradient-text font-semibold hover:underline"
                  target="_blank"
                >
                  Terms & Conditions
                </Link>
              </span>
            </label>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={loading}
              className="
                w-full py-4 rounded-xl
                btn-gradient
                text-white font-bold text-lg
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg shadow-purple-500/30
              "
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Already have an account?{' '}
            <Link href="/signin" className="gradient-text font-semibold hover:underline">
              Sign in
            </Link>
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default SignupPage;
