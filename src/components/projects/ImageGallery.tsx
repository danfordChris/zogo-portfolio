import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectImage } from '../../store/projectStore';
import clsx from 'clsx';

interface ImageGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
  mode: string;
  onClose: () => void;
  onDownload?: (image: ProjectImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  projectTitle,
  mode,
  onClose,
  onDownload,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = mode === 'dark';
  const currentImage = images[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className={clsx(
          'fixed inset-0 z-50 flex flex-col',
          isDark
            ? 'bg-black/80 backdrop-blur-md'
            : 'bg-white/80 backdrop-blur-md'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Header */}
        <motion.div
          className={clsx(
            'flex items-center justify-between p-4 sm:p-6 border-b',
            isDark
              ? 'border-white/10 bg-black/40'
              : 'border-gray-200 bg-white/40'
          )}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <h2
              className={clsx(
                'text-lg sm:text-2xl font-bold',
                isDark ? 'text-white' : 'text-gray-900'
              )}
            >
              {projectTitle}
            </h2>
            <p
              className={clsx(
                'text-sm mt-1',
                isDark ? 'text-gray-400' : 'text-gray-600'
              )}
            >
              {currentIndex + 1} / {images.length}
            </p>
          </div>

          <motion.button
            onClick={onClose}
            className={clsx(
              'p-2 rounded-lg transition-all',
              isDark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-gray-900/10 text-gray-900'
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Close gallery"
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
        </motion.div>

        {/* Main Image Viewer */}
        <motion.div
          className="flex-1 flex items-center justify-center overflow-hidden p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage.url}
                alt={currentImage.title || `${projectTitle} image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    goPrev();
                  }}
                  className={clsx(
                    'absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-lg glass-card',
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous image"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className={clsx(
                    'absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg glass-card',
                    isDark
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-gray-900/10 hover:bg-gray-900/20 text-gray-900'
                  )}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next image"
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </>
            )}

            {/* Image Info */}
            {currentImage.title && (
              <motion.div
                className={clsx(
                  'absolute bottom-4 left-4 glass-card px-4 py-2 rounded-lg',
                  isDark ? 'bg-black/40 text-white' : 'bg-white/40 text-gray-900'
                )}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-sm font-semibold">{currentImage.title}</p>
              </motion.div>
            )}

            {/* Download Button */}
            {onDownload && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onDownload(currentImage);
                }}
                className={clsx(
                  'absolute bottom-4 right-4 glass-card px-4 py-2 rounded-lg flex items-center gap-2',
                  isDark
                    ? 'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-500/30'
                    : 'bg-blue-500/10 text-blue-700 hover:bg-blue-500/20 border border-blue-500/20'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
                <span className="text-sm font-semibold">Download</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <motion.div
            className={clsx(
              'flex items-center gap-2 overflow-x-auto p-4 border-t',
              isDark
                ? 'border-white/10 bg-black/40'
                : 'border-gray-200 bg-white/40'
            )}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {images.map((image, idx) => (
              <motion.button
                key={image.id}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(idx);
                }}
                className={clsx(
                  'flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all',
                  currentIndex === idx
                    ? isDark
                      ? 'border-blue-400 shadow-glow'
                      : 'border-blue-600 shadow-glow'
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
              </motion.button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery;
