import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CloseIcon from '@mui/icons-material/Close';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface ProjectModalProps {
  isOpen: boolean;
  projectTitle: string;
  images: string[];
  onClose: () => void;
}

function ProjectModal({ isOpen, projectTitle, images, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const currentImage = images[currentImageIndex] || images[0];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const downloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${projectTitle.replace(/\s+/g, '-')}-${index}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="modal-header">
              <h2>{projectTitle}</h2>
              <button className="close-btn" onClick={onClose}>
                <CloseIcon />
              </button>
            </div>

            {/* Image Viewer */}
            <div className="image-viewer">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={currentImage}
                  alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
                  className="main-image"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                    <ChevronLeftIcon />
                  </button>
                  <button className="nav-btn next-btn" onClick={handleNextImage}>
                    <ChevronRightIcon />
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="image-counter">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            {images.length > 1 && (
              <div className="thumbnail-strip">
                {images.map((img, idx) => (
                  <motion.button
                    key={idx}
                    className={`thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} />
                  </motion.button>
                ))}
              </div>
            )}

            {/* Download Button */}
            <motion.button
              className="download-btn"
              onClick={() => downloadImage(currentImage, currentImageIndex)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDownloadIcon />
              Download Image
            </motion.button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
