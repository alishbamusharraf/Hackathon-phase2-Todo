'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { signin } from '../../lib/api';
import GlassCard from '../../components/GlassCard';
import toast from 'react-hot-toast';

const SigninPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signin({ email, password });

      if (typeof window !== 'undefined' && response.token) {
        localStorage.setItem('auth_token', response.token);
      }

      toast.success('Signin successful!');
      router.push('/dashboard');
    } catch (error) {
      console.error('Signin error:', error);
      toast.error('Signin failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center particle-bg p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

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
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              ✨
            </motion.div>
            <h1 className="text-4xl font-black gradient-text mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Welcome Back
            </h1>
            <p className="text-gray-400 text-sm">
              Sign in to continue your productivity journey
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 cursor-pointer group">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 rounded border-2 border-purple-500/50 bg-white/5 text-purple-600 focus:ring-2 focus:ring-purple-500/20 cursor-pointer"
                />
                <span className="group-hover:text-white transition-colors">Remember me</span>
              </label>

              <a href="#" className="text-purple-400 hover:text-pink-400 transition-colors font-medium">
                Forgot password?
              </a>
            </div>

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
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </motion.button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="gradient-text font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default SigninPage;
