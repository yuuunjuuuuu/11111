import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

import Logo from './Logo';

const navItems = [
    { label: 'Program', to: '/program' },
    { label: 'Curriculum', to: '/curriculum' },
    { label: 'Mentor', to: '/mentor' },
    { label: 'Review', to: '/reviews' },
    { label: 'FAQ', to: '/faq' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-dark-950/80 backdrop-blur-lg shadow-lg py-4 border-b border-dark-800'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-xl md:text-2xl font-bold font-sans tracking-tight flex items-center gap-3 text-white"
                >
                    <Logo className="w-10 h-10 shadow-[0_0_15px_rgba(125,49,255,0.5)] rounded-xl" />
                    <span>Data Insight</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `font-bold transition-colors text-sm tracking-tight ${isActive ? 'text-primary-400' : 'text-dark-200 hover:text-primary-400'}`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/apply"
                        className="px-5 py-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-all font-bold text-sm shadow-lg shadow-primary-900/20"
                    >
                        Apply Now
                    </Link>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu className="w-6 h-6" />
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                        className="fixed inset-0 bg-dark-900 z-[60] flex flex-col p-6 border-l border-dark-800"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-xl font-bold text-white font-sans">Menu</span>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="text-dark-400 hover:text-white">
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                        `text-2xl font-bold text-left transition-colors ${isActive ? 'text-primary-400' : 'text-dark-200 hover:text-primary-400'}`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <Link
                                to="/apply"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 w-full py-4 bg-primary-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-primary-500 transition-colors text-center"
                            >
                                지원하기
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
