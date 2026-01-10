'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import GlassCard from '../../components/GlassCard';

const TermsAndConditionsPage = () => {
    return (
        <div className="min-h-screen particle-bg py-20 px-4 relative overflow-hidden">
            {/* Decorative background glows */}
            <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="container mx-auto max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <GlassCard className="p-8 md:p-14 rounded-[2.5rem] border-2 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl shadow-2xl">
                        <header className="text-center mb-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', damping: 10, stiffness: 100, delay: 0.2 }}
                                className="text-5xl mb-6"
                            >
                                📜
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4 gradient-text" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                Service Guidelines
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base">
                                Please review our operational framework to understand our shared commitment.
                            </p>
                        </header>

                        <div className="space-y-10 text-gray-300 leading-relaxed font-light">
                            <section className="relative pl-6 border-l-2 border-purple-500/30">
                                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="text-purple-400 mr-2 text-sm">01.</span> Operational Overview
                                </h2>
                                <p>
                                    Welcome to the <span className="text-white font-medium">TaskFlow</span> ecosystem. By engaging with our platform, you acknowledge and agree to adhere to the professional standards outlined here. Our suite is designed to optimize your workflow through an intuitive and sophisticated interface, fostering unparalleled organized productivity.
                                </p>
                            </section>

                            <section className="relative pl-6 border-l-2 border-pink-500/30">
                                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="text-pink-400 mr-2 text-sm">02.</span> Member Credentials
                                    </h2>
                                <p>
                                    To unlock the full potential of TaskFlow, the creation of a personalized workspace is mandatory. You are the sole custodian of your authentication credentials. Maintaining the absolute confidentiality of your profile and overseeing all digital interactions within your workspace remains your primary responsibility.
                                </p>
                            </section>

                            <section className="relative pl-6 border-l-2 border-blue-500/30">
                                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="text-blue-400 mr-2 text-sm">03.</span> Privacy & Security Protocol
                                </h2>
                                <p>
                                    Your data integrity is our utmost priority. We employ advanced cryptographic standardizations to safeguard your task metadata and personal identifiers. TaskFlow operates on a principle of non-disclosure; your private architecture will never be shared with third parties, ensuring your intellectual territory remains pristine.
                                </p>
                            </section>

                            <section className="relative pl-6 border-l-2 border-cyan-500/30">
                                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="text-cyan-400 mr-2 text-sm">04.</span> Intellectual Proprietorship
                                </h2>
                                <p>
                                    You retain 100% ownership of every thought, task, and description generated within TaskFlow. By utilizing our infrastructure, you grant us a technical license strictly for hosting and synchronizing your content, enabling a seamless multi-device experience tailored to your needs.
                                </p>
                            </section>

                            <section className="relative pl-6 border-l-2 border-purple-500/30">
                                <h2 className="text-xl font-bold text-white mb-3 flex items-center">
                                    <span className="text-purple-400 mr-2 text-sm">05.</span> Provisions for Termination
                                </h2>
                                <p>
                                    TaskFlow maintains the prerogative to suspend or finalize account access should there be a breach of these guidelines. We strive to maintain a secure environment for all members, and behaviors that may jeopardize our cloud framework or member experience are subject to review.
                                </p>
                            </section>
                        </div>

                        <footer className="mt-16 pt-10 border-t border-white/10 flex flex-col items-center gap-6">
                            <p className="text-gray-500 text-xs text-center italic">
                                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href="/signup"
                                    className="px-10 py-4 btn-gradient text-white rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/30 transition-all"
                                >
                                    Return to Registration
                                </Link>
                            </motion.div>
                        </footer>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsAndConditionsPage;
