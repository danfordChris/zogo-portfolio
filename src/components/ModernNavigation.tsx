import React, {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {Menu, Moon, Sun, Volume2, VolumeX, X} from 'lucide-react';
import clsx from 'clsx';

interface NavigationProps {
    mode: string;
    modeChange: () => void;
    isMuted: boolean;
    handleMuteToggle: () => void;
}

const navItems = [
    {label: 'Expertise', id: 'expertise'},
    {label: 'History', id: 'history'},
    {label: 'Projects', id: 'projects'},
    {label: 'Contact', id: 'contact'},
];

const ModernNavigation: React.FC<NavigationProps> = ({
                                                         mode,
                                                         modeChange,
                                                         isMuted,
                                                         handleMuteToggle,
                                                     }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            for (const item of navItems) {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                        setActiveSection(item.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
            setMobileOpen(false);
        }
    };

    const isDark = mode === 'dark';

    return (
        <motion.nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                scrolled
                    ? 'glass-card mx-4 mt-4 rounded-2xl'
                    : isDark
                        ? 'bg-transparent'
                        : 'bg-white/50 backdrop-blur-none'
            )}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
        >
            <div className={clsx('px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto flex items-center justify-between')}>
                {/* Logo/Brand */}
                <motion.div
                    className="flex items-center gap-2"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                >
                    <div
                        className={clsx(
                            'w-10 h-10 rounded-full flex items-center justify-center font-bold cursor-pointer transition-all duration-300',
                            'flex-shrink-0 text-xs sm:text-sm md:text-lg',
                            isDark
                                ? scrolled
                                    ? 'bg-blue-500/20 text-blue-400'
                                    : 'text-white'
                                : scrolled
                                    ? 'bg-blue-500/20 text-blue-600'
                                    : 'text-gray-900'
                        )}
                        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                        title="DanfordChris"
                    >
                        <span className="hidden sm:inline w-20">DanfordChris</span>
                        <span className="sm:hidden">DC</span>
                    </div>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={clsx(
                                'px-4 py-2 rounded-lg transition-all duration-300 relative group',
                                activeSection === item.id
                                    ? isDark
                                        ? 'text-blue-400'
                                        : 'text-blue-600'
                                    : isDark
                                        ? 'text-gray-300 hover:text-white'
                                        : 'text-gray-700 hover:text-gray-900'
                            )}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            {item.label}
                            {activeSection === item.id && (
                                <motion.div
                                    className={clsx(
                                        'absolute bottom-0 left-0 right-0 h-0.5 rounded-full',
                                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                                    )}
                                    layoutId="activeIndicator"
                                    transition={{type: 'spring', stiffness: 380, damping: 30}}
                                />
                            )}
                        </motion.button>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={modeChange}
                        className={clsx(
                            'p-2 rounded-lg transition-all duration-300',
                            scrolled
                                ? isDark
                                    ? 'bg-white/10 hover:bg-white/20 text-yellow-400'
                                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                                : isDark
                                    ? 'text-white hover:text-yellow-400'
                                    : 'text-gray-900'
                        )}
                        whileHover={{scale: 1.1, rotate: 20}}
                        whileTap={{scale: 0.9}}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20}/> : <Moon size={20}/>}
                    </motion.button>

                    {/* Mute Toggle */}
                    <motion.button
                        onClick={handleMuteToggle}
                        className={clsx(
                            'p-2 rounded-lg transition-all duration-300',
                            scrolled
                                ? isDark
                                    ? 'bg-white/10 hover:bg-white/20 text-green-400'
                                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                                : isDark
                                    ? 'text-white hover:text-green-400'
                                    : 'text-gray-900'
                        )}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        aria-label="Toggle mute"
                    >
                        {isMuted ? <VolumeX size={20}/> : <Volume2 size={20}/>}
                    </motion.button>

                    {/* Mobile Menu Button */}
                    <motion.button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={clsx(
                            'md:hidden p-2 rounded-lg transition-all duration-300',
                            scrolled
                                ? isDark
                                    ? 'bg-white/10 hover:bg-white/20 text-white'
                                    : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                                : isDark
                                    ? 'text-white'
                                    : 'text-gray-900'
                        )}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        transition={{duration: 0.3}}
                        className={clsx(
                            'md:hidden border-t',
                            isDark ? 'border-white/10' : 'border-gray-200',
                            scrolled ? '' : isDark ? 'bg-transparent' : 'bg-white/50'
                        )}
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item, idx) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={clsx(
                                        'block w-full text-left px-4 py-3 rounded-lg transition-all duration-300',
                                        activeSection === item.id
                                            ? isDark
                                                ? 'bg-blue-500/20 text-blue-400'
                                                : 'bg-blue-500/10 text-blue-600'
                                            : isDark
                                                ? 'text-gray-300 hover:bg-white/10'
                                                : 'text-gray-700 hover:bg-gray-100'
                                    )}
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: idx * 0.05}}
                                    whileHover={{x: 5}}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default ModernNavigation;
