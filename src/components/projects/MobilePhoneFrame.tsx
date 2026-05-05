import React from 'react';
import clsx from 'clsx';

interface MobilePhoneFrameProps {
  imageSrc: string;
  alt: string;
  isDark: boolean;
}

const MobilePhoneFrame: React.FC<MobilePhoneFrameProps> = ({ imageSrc, alt, isDark }) => {
  return (
    <div className="flex items-center justify-center">
      {/* Phone Frame */}
      <div
        className={clsx(
          'relative rounded-3xl overflow-hidden shadow-2xl',
          'w-48 sm:w-56 aspect-[9/19]',
          isDark ? 'bg-black/80' : 'bg-gray-900/90'
        )}
      >
        {/* Phone Notch */}
        <div
          className={clsx(
            'absolute top-0 left-1/2 -translate-x-1/2 z-10',
            'w-32 h-7 rounded-b-2xl',
            isDark ? 'bg-black' : 'bg-gray-900'
          )}
        />

        {/* Screen Content */}
        <div
          className="absolute inset-0 pt-7 overflow-hidden"
          style={{ aspectRatio: '9/19' }}
        >
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Phone Frame Border */}
        <div
          className={clsx(
            'absolute inset-0 rounded-3xl pointer-events-none',
            'border-[12px] sm:border-[14px]',
            isDark ? 'border-gray-900' : 'border-gray-800'
          )}
        />

        {/* Home Indicator */}
        <div
          className={clsx(
            'absolute bottom-1 left-1/2 -translate-x-1/2 z-10',
            'w-24 h-1 rounded-full',
            isDark ? 'bg-gray-800' : 'bg-gray-700'
          )}
        />
      </div>
    </div>
  );
};

export default MobilePhoneFrame;
