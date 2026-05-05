import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectImage } from '../../store/projectStore';
import clsx from 'clsx';

interface ProjectModalProps {
  project: Project | null;
  mode: string;
  onClose: () => void;
  onDownload?: (images: ProjectImage[]) => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  mode,
  onClose,
  onDownload,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set());
  const isDark = mode === 'dark';

  if (!project) return null;

  const currentImage = project.images?.[selectedImageIndex];
  const imageCount = project.images?.length || 0;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && imageCount > 1) {
        setSelectedImageIndex((prev) => (prev + 1) % imageCount);
      }
      if (e.key === 'ArrowLeft' && imageCount > 1) {
        setSelectedImageIndex((prev) => (prev - 1 + imageCount) % imageCount);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageCount, onClose]);

  const toggleImageSelection = (imageId: string) => {
    const newSelection = new Set(selectedImages);
    if (newSelection.has(imageId)) {
      newSelection.delete(imageId);
    } else {
      newSelection.add(imageId);
    }
    setSelectedImages(newSelection);
  };

  const toggleAllImages = () => {
    if (selectedImages.size === imageCount) {
      setSelectedImages(new Set());
    } else {
      setSelectedImages(new Set(project.images?.map((img) => img.id) || []));
    }
  };

  const handleDownload = () => {
    const imagesToDownload = project.images?.filter((img) =>
      selectedImages.has(img.id)
    ) || [currentImage];
    onDownload?.(imagesToDownload);
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className={clsx(
          'fixed inset-0 z-40',
          isDark ? 'bg-black/60' : 'bg-black/40'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Side Drawer */}
      <motion.div
        className={clsx(
          'fixed right-0 top-0 h-screen w-full sm:w-[500px] z-50 overflow-hidden flex flex-col',
          'glass-card rounded-0 sm:rounded-l-3xl border-l border-white/20',
          isDark ? 'bg-slate-900/95' : 'bg-white/95'
        )}
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 400 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={clsx(
            'flex items-center justify-between p-4 sm:p-6 border-b sticky top-0',
            isDark ? 'border-white/10' : 'border-gray-200',
            isDark ? 'bg-slate-900/80' : 'bg-white/80'
          )}
        >
          <div className="flex-1">
            <h2
              className={clsx(
                'text-xl sm:text-2xl font-bold',
                isDark ? 'text-white' : 'text-gray-900'
              )}
            >
              {project.title}
            </h2>
            {project.category && (
              <span
                className={clsx(
                  'inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold',
                  isDark
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                )}
              >
                {project.category}
              </span>
            )}
          </div>

          <motion.button
            onClick={onClose}
            className={clsx(
              'p-2 rounded-lg transition-all flex-shrink-0 ml-4',
              isDark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-gray-900/10 text-gray-900'
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 sm:p-6">
              {/* Description */}
              <p
                className={clsx(
                  'mb-6 leading-relaxed',
                  isDark ? 'text-gray-300' : 'text-gray-700'
                )}
              >
                {project.description}
              </p>

              {/* Tech Stack */}
              {project.tech && project.tech.length > 0 && (
                <div className="mb-6">
                  <h3
                    className={clsx(
                      'font-semibold mb-3',
                      isDark ? 'text-white' : 'text-gray-900'
                    )}
                  >
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className={clsx(
                          'px-3 py-1 rounded-lg text-sm font-medium transition-all',
                          isDark
                            ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                            : 'bg-gray-900/10 text-gray-700 hover:bg-gray-900/20'
                        )}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Images Section */}
              {imageCount > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3
                      className={clsx(
                        'font-semibold',
                        isDark ? 'text-white' : 'text-gray-900'
                      )}
                    >
                      Project Images ({imageCount})
                    </h3>

                    {imageCount > 1 && (
                      <motion.button
                        onClick={toggleAllImages}
                        className={clsx(
                          'text-xs font-semibold px-3 py-1 rounded-lg transition-all',
                          isDark
                            ? 'hover:bg-white/10 text-blue-400'
                            : 'hover:bg-gray-900/10 text-blue-600'
                        )}
                        whileHover={{ scale: 1.05 }}
                      >
                        {selectedImages.size === imageCount ? 'Deselect All' : 'Select All'}
                      </motion.button>
                    )}
                  </div>

                  {/* Current Image */}
                  <div
                    className={clsx(
                      'rounded-lg mb-6 glass-card',
                      'bg-gradient-to-br from-gray-600 to-gray-800 cursor-pointer group'
                    )}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={selectedImageIndex}
                        className="relative w-full flex items-center justify-center bg-gray-900/50 py-4"
                      >
                        <motion.img
                          src={currentImage?.url}
                          alt={currentImage?.title || 'Project image'}
                          className="max-w-full h-auto px-2"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        />
                        {imageCount > 1 && (
                          <>
                            <motion.button
                              onClick={() =>
                                setSelectedImageIndex((prev) => (prev - 1 + imageCount) % imageCount)
                              }
                              className={clsx(
                                'absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-lg',
                                'bg-white/20 text-white hover:bg-white/30 transition-all',
                                'opacity-0 group-hover:opacity-100'
                              )}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                              </svg>
                            </motion.button>
                            <motion.button
                              onClick={() =>
                                setSelectedImageIndex((prev) => (prev + 1) % imageCount)
                              }
                              className={clsx(
                                'absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg backdrop-blur-lg',
                                'bg-white/20 text-white hover:bg-white/30 transition-all',
                                'opacity-0 group-hover:opacity-100'
                              )}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                              </svg>
                            </motion.button>
                            <div
                              className={clsx(
                                'absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full',
                                'bg-white/20 text-white text-xs font-semibold backdrop-blur-lg'
                              )}
                            >
                              {selectedImageIndex + 1} / {imageCount}
                            </div>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Thumbnail Gallery */}
                  <div className="flex flex-wrap gap-3">
                    {project.images?.map((image, idx) => (
                      <motion.button
                        key={image.id}
                        onClick={() => setSelectedImageIndex(idx)}
                        className={clsx(
                          'relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                          selectedImageIndex === idx
                            ? isDark
                              ? 'border-blue-400 shadow-glow'
                              : 'border-blue-600'
                            : isDark
                            ? 'border-white/20 hover:border-white/40'
                            : 'border-gray-200 hover:border-gray-400'
                        )}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          src={image.url}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />

                        {/* Selection Checkbox */}
                        {imageCount > 1 && (
                          <motion.div
                            className={clsx(
                              'absolute inset-0 flex items-center justify-center',
                              selectedImages.has(image.id)
                                ? 'bg-blue-500/60'
                                : 'bg-black/0 hover:bg-black/20'
                            )}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleImageSelection(image.id);
                            }}
                          >
                            {selectedImages.has(image.id) && (
                              <motion.svg
                                className="w-6 h-6 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                              >
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </motion.svg>
                            )}
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

        {/* Footer */}
        <div
          className={clsx(
            'flex flex-col sm:flex-row items-center justify-between gap-3 p-4 sm:p-6 border-t sticky bottom-0',
            isDark ? 'border-white/10 bg-slate-900/80' : 'border-gray-200 bg-white/80'
          )}
        >
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                'flex-1 glass-card px-4 py-3 rounded-lg font-semibold transition-all text-center text-sm sm:text-base',
                isDark
                  ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  : 'bg-gray-900/10 text-gray-900 hover:bg-gray-900/20 border border-gray-900/20'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Live
            </motion.a>
          )}

          {imageCount > 1 && selectedImages.size > 0 && (
            <motion.button
              onClick={handleDownload}
              className={clsx(
                'flex-1 glass-card px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base',
                isDark
                  ? 'bg-green-500/20 text-green-300 hover:bg-green-500/30 border border-green-500/30'
                  : 'bg-green-500/10 text-green-700 hover:bg-green-500/20 border border-green-500/20'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2z" />
                <path d="M11 3L5.5 8.5l1.42 1.41L11 5.83v10.17h2V5.83l4.08 4.08L18.5 8.5z" />
              </svg>
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">({selectedImages.size})</span>
            </motion.button>
          )}

          {imageCount <= 1 && onDownload && (
            <motion.button
              onClick={() => onDownload([currentImage])}
              className={clsx(
                'flex-1 glass-card px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base',
                isDark
                  ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30'
                  : 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 border border-blue-500/20'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2z" />
                <path d="M11 3L5.5 8.5l1.42 1.41L11 5.83v10.17h2V5.83l4.08 4.08L18.5 8.5z" />
              </svg>
              <span className="hidden sm:inline">Download</span>
            </motion.button>
          )}
        </div>
      </motion.div>

      {/* Close on backdrop click is handled above */}
    </AnimatePresence>
  );
};

export default ProjectModal;
