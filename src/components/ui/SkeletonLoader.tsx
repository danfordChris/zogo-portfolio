import React from 'react';
import clsx from 'clsx';

interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width = '100%',
  height = '20px',
  className = '',
  count = 1,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={clsx(
            'animate-pulse bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 rounded',
            className
          )}
          style={{ width, height }}
        />
      ))}
    </>
  );
};

export default SkeletonLoader;
