import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../store/projectStore';
import clsx from 'clsx';

interface ModernProjectCardProps {
  project: Project;
  mode: string;
  onImageClick?: (project: Project) => void;
  index: number;
}

const ModernProjectCard: React.FC<ModernProjectCardProps> = ({
  project,
  mode,
  onImageClick,
  index,
}) => {
  const isDark = mode === 'dark';
  const [isHovered, setIsHovered] = useState(false);
  const imageCount = project.images?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <div
        onClick={() => imageCount > 0 && onImageClick?.(project)}
        className={clsx(
          'glass-card p-0 rounded-2xl h-full flex flex-col overflow-hidden',
          'transition-all duration-300 cursor-pointer',
          isHovered && 'scale-105 shadow-glow-lg'
        )}
      >
        {/* Image Section */}
        <div
          className="relative h-48 sm:h-56 w-full overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800"
          onClick={() => onImageClick?.(project)}
        >
          <motion.img
            src={project.image}
            alt={`${project.title} — project by Danford Chriss`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Overlay */}
          <motion.div
            className={clsx(
              'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-end justify-start p-4',
              isHovered ? 'bg-gradient-to-t from-black/80 to-black/40' : ''
            )}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
          >
            {/* Image Count Badge */}
            {imageCount > 0 && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onImageClick?.(project);
                }}
                className={clsx(
                  'glass-card px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2',
                  'bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all'
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
                {imageCount} {imageCount === 1 ? 'Image' : 'Images'}
              </motion.button>
            )}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col">
          {/* Title */}
          <h3
            className={clsx(
              'text-lg sm:text-xl font-archivo font-bold mb-2 line-clamp-2',
              isDark ? 'text-white' : 'text-gray-900'
            )}
          >
            {project.title}
          </h3>

          {/* Category Tag */}
          {project.category && (
            <motion.span
              className={clsx(
                'inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold mb-3',
                isDark
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
              )}
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.span>
          )}

          {/* Description */}
          <p
            className={clsx(
              'flex-1 text-sm leading-relaxed mb-4 line-clamp-3',
              isDark ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            {project.description}
          </p>

          {/* Tech Tags */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech, idx) => (
                <motion.span
                  key={idx}
                  className={clsx(
                    'px-2 py-1 rounded text-xs font-medium transition-all',
                    isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                      : 'bg-gray-900/10 text-gray-700 hover:bg-gray-900/20'
                  )}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 3 && (
                <span
                  className={clsx(
                    'px-2 py-1 text-xs font-medium',
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  )}
                >
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Action Button */}
          <div className="flex gap-2 mt-auto">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={clsx(
                  'flex-1 glass-card px-3 py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold',
                  'transition-all duration-300',
                  isDark
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
                <span className="hidden sm:inline">View Live</span>
                <span className="sm:hidden">Link</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ModernProjectCard;
