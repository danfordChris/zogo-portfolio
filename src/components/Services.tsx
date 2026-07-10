import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, BrainCircuit, Rocket, Smartphone, WandSparkles } from 'lucide-react';
import clsx from 'clsx';

interface ServicesProps {
  mode: string;
}

const services = [
  {
    title: 'Custom Software Development',
    description:
      'I build tailored web platforms, internal tools, and product systems designed around business workflows, performance, and long-term maintainability.',
    icon: Blocks,
  },
  {
    title: 'Mobile App Development',
    description:
      'I develop cross-platform mobile apps with Flutter, from user flows and API integration to offline-first experiences and production delivery.',
    icon: Smartphone,
  },
  {
    title: 'AI Solutions & Automation',
    description:
      'I integrate practical AI features and workflow automation where they create real value, including assistants, content tooling, and smart product capabilities.',
    icon: BrainCircuit,
  },
  {
    title: 'ContentLab',
    description:
      'ContentLab is my AI-powered content service and product offering for teams that need faster content workflows, idea generation, and content operations support.',
    icon: WandSparkles,
  },
  {
    title: 'DevOps & Cloud Deployment',
    description:
      'I help teams ship reliably with CI/CD, cloud deployment, release automation, environment setup, and operational improvements for stable launches.',
    icon: Rocket,
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services: React.FC<ServicesProps> = ({ mode }) => {
  const isDark = mode === 'dark';

  return (
    <section
      id="services"
      className={clsx(
        'py-16 sm:py-24 px-4 sm:px-6 lg:px-8',
        isDark
          ? 'bg-gradient-to-b from-slate-950/20 via-slate-900/10 to-transparent'
          : 'bg-gradient-to-b from-white via-slate-50/80 to-transparent'
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
            Services
          </p>
          <h2
            className={clsx(
              'text-4xl sm:text-5xl font-bold font-archivo mb-4',
              isDark ? 'text-white' : 'text-gray-900'
            )}
          >
            What I can help you build
          </h2>
          <p
            className={clsx(
              'text-lg max-w-3xl mx-auto',
              isDark ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            Clear service areas make the portfolio easier for clients to scan and easier for search engines to
            understand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                className={clsx(
                  'rounded-3xl border p-6 sm:p-8 transition-all duration-300',
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/[0.07]'
                    : 'border-slate-200 bg-white/80 hover:bg-white shadow-[0_8px_40px_rgba(15,23,42,0.06)]'
                )}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08 }}
              >
                <div
                  className={clsx(
                    'inline-flex p-3 rounded-2xl mb-5',
                    isDark ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-50 text-blue-700'
                  )}
                >
                  <Icon size={24} />
                </div>
                <h3
                  className={clsx(
                    'text-2xl font-archivo font-semibold mb-3',
                    isDark ? 'text-white' : 'text-slate-950'
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={clsx(
                    'text-base leading-8',
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  )}
                >
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
