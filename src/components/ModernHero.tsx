import React from 'react';
import {motion} from 'framer-motion';
import {ReactTyped} from 'react-typed';
import Avatar from '../assets/images/avater.jpg';
import bgLight from '../assets/images/bg-light.png';
import bgDark from '../assets/images/bg-dark.png';
import clsx from 'clsx';

interface ModernHeroProps {
    mode: string;
    isMuted: boolean;
    handleMuteToggle: () => void;
}

const ModernHero: React.FC<ModernHeroProps> = ({mode, isMuted, handleMuteToggle}) => {
    const isDark = mode === 'dark';

    const socialLinks = [
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
            ),
            url: 'https://github.com/danfordChris/',
            label: 'GitHub',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.604 2.908-1.604 2.114 0 3.695 1.38 3.695 4.365v5.521zM5.337 6.685c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.959-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.726 1.715-1.959 1.715zm1.667 13.767H3.67V8.506h3.334v11.946zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
            ),
            url: 'https://www.linkedin.com/in/danford-chriss-438364240',
            label: 'LinkedIn',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856 1.07 4.96 4.96 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.948 4.948 0 00-8.506 4.513A14.025 14.025 0 011.671 3.149a4.948 4.948 0 001.523 6.573 4.914 4.914 0 01-2.243-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417A9.868 9.868 0 010 19.54a13.998 13.998 0 007.671 2.25c9.056 0 13.995-7.502 13.995-13.993 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
            ),
            url: 'https://x.com/Co24669',
            label: 'Twitter',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.957c-3.814 5.209-11.781 6.541-17.106 2.724-1.204-.87-2.04-1.936-2.633-3.126 1.456 1.159 3.077 1.922 4.758 2.163 2.908.387 5.747-.196 7.848-1.949.831-.681 1.608-1.514 2.133-2.423.219.369.463.717.776 1.035 1.516 1.548 3.831 1.911 5.701 1.576z"/>
                </svg>
            ),
            url: 'https://www.instagram.com/royz_chriss/',
            label: 'Instagram',
        },
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, y: 20},
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 0.8},
        },
    };

    const bgImage = isDark ? bgDark : bgLight;

    return (
        <section
            id="hero"
            className={clsx(
                'min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden'
            )}
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundBlendMode: isDark ? 'multiply' : 'normal',
            }}
        >
            {/* Background Overlay for better text readability */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className={clsx(
                        'absolute inset-0',
                        isDark
                            ? 'bg-black/30'
                            : 'bg-white/20'
                    )}
                />

                {/* Animated Blue Waves */}
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 bg-blue-500"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{duration: 8, repeat: Infinity}}
                    style={{top: '10%', left: '-5%'}}
                />
                <motion.div
                    className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 bg-blue-600"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{duration: 10, repeat: Infinity}}
                    style={{bottom: '10%', right: '-5%'}}
                />
            </div>

            <motion.div
                className="max-w-6xl w-full relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content */}
                    <motion.div className="flex-1 text-center md:text-left w-full md:w-auto" variants={itemVariants}>
                        {/* Social Links */}
                        <motion.div className="flex justify-center md:justify-start gap-3 mb-8" variants={itemVariants}>
                            {socialLinks.map((social, idx) => (
                                <motion.a
                                    key={social.label}
                                    href={social.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={clsx(
                                        'glass-card p-3 rounded-full transition-all duration-300',
                                        isDark
                                            ? 'bg-white/10 text-white hover:bg-blue-500/20 hover:text-blue-400'
                                            : 'bg-gray-900/10 text-gray-700 hover:bg-blue-500/10 hover:text-blue-600'
                                    )}
                                    whileHover={{scale: 1.2, rotate: 5}}
                                    whileTap={{scale: 0.95}}
                                    transition={{delay: idx * 0.1}}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Greeting */}
                        <motion.div variants={itemVariants}>
                            <p
                                className={clsx(
                                    'text-lg font-grotesk mb-4',
                                    isDark ? 'text-blue-400' : 'text-blue-600'
                                )}
                            >
                                Dar es Salaam, Tanzania
                            </p>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            className={clsx(
                                'text-5xl sm:text-6xl md:text-7xl font-archivo font-bold mb-6 leading-tight',
                                isDark ? 'text-white' : 'text-gray-900'
                            )}
                            variants={itemVariants}
                        >
                            Danford <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Chriss</span>
                        </motion.h1>

                        {/* Avatar for Mobile - Between Name and Typewriter */}
                        <motion.div
                            className="md:hidden flex justify-center mb-8"
                            variants={itemVariants}
                        >
                            <motion.div
                                className={clsx(
                                    'relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden glass-card-lg',
                                    'border border-white/20 shadow-glass-lg'
                                )}
                                animate={{y: [0, -20, 0]}}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <img
                                    src={Avatar}
                                    alt="Danford Chriss"
                                    className="w-full h-full object-cover"
                                />
                                <motion.div
                                    className={clsx(
                                        'absolute inset-0',
                                        isDark
                                            ? 'bg-gradient-to-t from-slate-900/40 to-transparent'
                                            : 'bg-gradient-to-t from-white/40 to-transparent'
                                    )}
                                    animate={{
                                        opacity: [0.3, 0.6, 0.3],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                    }}
                                />
                            </motion.div>
                        </motion.div>

                        {/* Role with Typing Effect */}
                        <motion.div
                            className={clsx(
                                'text-2xl sm:text-3xl font-grotesk font-semibold mb-6 min-h-[60px] flex items-center justify-center md:justify-start',
                                isDark ? 'text-gray-300' : 'text-gray-700'
                            )}
                            variants={itemVariants}
                        >
                            <span>I'm a </span>
                            <span className={clsx('ml-2', isDark ? 'text-blue-400' : 'text-blue-600')}>
                <ReactTyped
                    strings={[
                        'Mobile Engineer',
                        'Flutter Developer',
                        'Full Stack Developer',
                        'DevOps Engineer',
                    ]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    cursorChar="|"
                />
              </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className={clsx(
                                'text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0',
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            )}
                            variants={itemVariants}
                        >
                            Passionate about building scalable applications and solving complex problems with innovative
                            solutions. I work across Flutter, React, TypeScript, Python, and
                            DevOps to help teams launch reliable digital products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                            variants={itemVariants}
                        >
                            <motion.a
                                href="https://drive.google.com/file/d/1HjBL1jao2V9kvAxCrA8fAXlWl1e-jied/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                className={clsx(
                                    'glass-card px-8 py-4 rounded-xl font-semibold transition-all duration-300',
                                    isDark
                                        ? 'bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 border border-blue-500/30'
                                        : 'bg-blue-600/30 text-blue-700 hover:bg-blue-600/50 border border-blue-500/30'
                                )}
                                whileHover={{scale: 1.05, y: -2}}
                                whileTap={{scale: 0.95}}
                            >
                                View Resume
                            </motion.a>

                            <motion.button
                                onClick={handleMuteToggle}
                                className={clsx(
                                    'glass-card px-8 py-4 rounded-xl font-semibold transition-all duration-300',
                                    isDark
                                        ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                        : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
                                )}
                                whileHover={{scale: 1.05, y: -2}}
                                whileTap={{scale: 0.95}}
                            >
                                {isMuted ? '🔊 Listen Resume' : '⏸ Pause Resume'}
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Right Avatar - Desktop Only */}
                    <motion.div
                        className="hidden md:flex flex-1 justify-center"
                        variants={itemVariants}
                    >
                        <motion.div
                            className={clsx(
                                'relative w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden glass-card-lg',
                                'border border-white/20 shadow-glass-lg'
                            )}
                            animate={{y: [0, -20, 0]}}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <img
                                src={Avatar}
                                alt="Danford Chriss"
                                className="w-full h-full object-cover"
                            />
                            <motion.div
                                className={clsx(
                                    'absolute inset-0',
                                    isDark
                                        ? 'bg-gradient-to-t from-slate-900/40 to-transparent'
                                        : 'bg-gradient-to-t from-white/40 to-transparent'
                                )}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="flex justify-center mt-16"
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 2, repeat: Infinity}}
                >
                    <div
                        className={clsx(
                            'glass-card p-3 rounded-full',
                            isDark ? 'text-white' : 'text-gray-700'
                        )}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ModernHero;
