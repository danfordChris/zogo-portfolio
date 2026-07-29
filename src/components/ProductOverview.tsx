import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpenText, Sparkles } from 'lucide-react';
import clsx from 'clsx';

interface ProductOverviewProps {
  mode: string;
}

const offerings = [
  {
    title: 'ContentLab',
    eyebrow: 'AI Product',
    description:
      'An AI-powered content workflow product for faster ideation, content generation, reuse, and publishing support.',
    href: 'https://contentlab.danfordchris.dev/login',
    cta: 'Get Started',
    icon: Sparkles,
  },
  {
    title: 'Blog',
    eyebrow: 'Writing & Insights',
    description:
      'A dedicated place for engineering notes, product thinking, mobile development insights, and experiments worth sharing.',
    href: '/blog/',
    cta: 'Visit Blog',
    icon: BookOpenText,
  },
];

const ProductOverview: React.FC<ProductOverviewProps> = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <section
      id="products"
      className={clsx(
        'py-16 sm:py-24 px-4 sm:px-6 lg:px-8',
        isDark
          ? 'bg-gradient-to-b from-transparent via-slate-900/30 to-transparent'
          : 'bg-gradient-to-b from-slate-50/60 via-white to-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <p
            className={clsx(
              'text-sm font-semibold uppercase tracking-[0.24em] mb-3',
              isDark ? 'text-blue-400' : 'text-blue-700'
            )}
          >
            Products
          </p>
          <h2
            className={clsx(
              'text-4xl sm:text-5xl font-bold font-archivo mb-4',
              isDark ? 'text-white' : 'text-gray-900'
            )}
          >
            Explore ContentLab and my blog
          </h2>
          <p
            className={clsx(
              'text-lg max-w-3xl mx-auto',
              isDark ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            Two dedicated destinations: one for productized content workflows and one for writing, ideas, and technical notes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {offerings.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={clsx(
                  'rounded-3xl border p-8 sm:p-10',
                  isDark
                    ? 'border-white/10 bg-white/5'
                    : 'border-slate-200 bg-white shadow-[0_10px_50px_rgba(15,23,42,0.06)]'
                )}
              >
                <div
                  className={clsx(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium mb-6',
                    isDark ? 'bg-blue-500/10 text-blue-300' : 'bg-blue-50 text-blue-700'
                  )}
                >
                  <Icon size={16} />
                  {item.eyebrow}
                </div>

                <h3
                  className={clsx(
                    'text-3xl font-archivo font-semibold mb-4',
                    isDark ? 'text-white' : 'text-slate-950'
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={clsx(
                    'text-base sm:text-lg leading-8 mb-8',
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  )}
                >
                  {item.description}
                </p>

                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={clsx(
                    'inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300',
                    isDark
                      ? 'bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 border border-blue-500/30'
                      : 'bg-blue-600/20 text-blue-700 hover:bg-blue-600/30 border border-blue-500/30'
                  )}
                >
                  {item.cta}
                  <ArrowRight size={18} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
