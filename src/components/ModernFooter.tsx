import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import clsx from 'clsx';

interface ModernFooterProps {
  mode: string;
}

const ModernFooter: React.FC<ModernFooterProps> = ({ mode }) => {
  const currentYear = new Date().getFullYear();
  const isDark = mode === 'dark';

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: 'https://github.com/danfordChris/',
      label: 'GitHub',
      color: 'hover:text-slate-300',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.604 2.908-1.604 2.114 0 3.695 1.38 3.695 4.365v5.521zM5.337 6.685c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.959-1.715 1.188 0 1.915.762 1.915 1.715 0 .953-.726 1.715-1.959 1.715zm1.667 13.767H3.67V8.506h3.334v11.946zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
      url: 'https://www.linkedin.com/in/danford-chriss-438364240',
      label: 'LinkedIn',
      color: 'hover:text-blue-600',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.856 1.07 4.96 4.96 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.948 4.948 0 00-8.506 4.513A14.025 14.025 0 011.671 3.149a4.948 4.948 0 001.523 6.573 4.914 4.914 0 01-2.243-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417A9.868 9.868 0 010 19.54a13.998 13.998 0 007.671 2.25c9.056 0 13.995-7.502 13.995-13.993 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      url: 'https://x.com/Co24669',
      label: 'Twitter',
      color: 'hover:text-blue-400',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 17.957c-3.814 5.209-11.781 6.541-17.106 2.724-1.204-.87-2.04-1.936-2.633-3.126 1.456 1.159 3.077 1.922 4.758 2.163 2.908.387 5.747-.196 7.848-1.949.831-.681 1.608-1.514 2.133-2.423.219.369.463.717.776 1.035 1.516 1.548 3.831 1.911 5.701 1.576z" />
        </svg>
      ),
      url: 'https://www.instagram.com/royz_chriss/',
      label: 'Instagram',
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'py-12 px-4 border-t transition-colors duration-300',
        isDark
          ? 'border-white/10 bg-gradient-to-b from-transparent to-black/20'
          : 'border-gray-200 bg-gradient-to-b from-transparent to-gray-50'
      )}
    >
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                'glass-card p-3 rounded-full transition-all duration-300',
                isDark
                  ? `bg-white/10 text-white ${social.color}`
                  : `bg-gray-900/10 text-gray-700 ${social.color}`
              )}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Products / cross-links */}
        <div
          className={clsx(
            'flex justify-center gap-6 mb-6 text-sm',
            isDark ? 'text-gray-400' : 'text-gray-600'
          )}
        >
          <a
            href="https://contentlab.danfordchris.dev"
            target="_blank"
            rel="noopener"
            className={clsx(
              'font-medium transition-colors duration-300',
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            )}
          >
            ContentLab ↗
          </a>
          <a
            href="#projects"
            className={clsx(
              'font-medium transition-colors duration-300',
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            )}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={clsx(
              'font-medium transition-colors duration-300',
              isDark ? 'hover:text-blue-400' : 'hover:text-blue-600'
            )}
          >
            Contact
          </a>
        </div>

        {/* Copyright Text */}
        <motion.div
          className={clsx(
            'text-center text-sm transition-colors duration-300',
            isDark ? 'text-gray-400' : 'text-gray-600'
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Designed & built by</span>
            <a
              href="https://github.com/danfordChris/"
              target="_blank"
              rel="noreferrer"
              className={clsx(
                'font-semibold transition-colors duration-300',
                isDark
                  ? 'text-white hover:text-blue-400'
                  : 'text-gray-900 hover:text-blue-600'
              )}
            >
              Danford Chriss
            </a>
            <span>© {currentYear}</span>
            <span className="flex items-center gap-1">
              with <Heart size={16} className="text-red-500" />
            </span>
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={clsx(
            'glass-card p-3 rounded-full mx-auto mt-8 transition-all duration-300 flex items-center justify-center',
            isDark
              ? 'hover:bg-white/20 text-white hover:text-blue-400'
              : 'hover:bg-gray-900/10 text-gray-700 hover:text-blue-600'
          )}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </motion.footer>
  );
};

export default ModernFooter;
