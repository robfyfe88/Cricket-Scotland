import React from 'react';

interface SectionTitleProps {
  title: string;
  size?: 'small' | 'medium' | 'large'; 
  position?: 'center' | 'bottom'; 
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, size = 'large', position = 'center', className }) => {
  let sizeClass = '';
  if (size === 'small') sizeClass = 'text-2xl md:text-3xl lg:text-4xl';
  if (size === 'medium') sizeClass = 'text-4xl md:text-5xl lg:text-6xl';
  if (size === 'large') sizeClass = 'text-5xl md:text-6xl lg:text-[213.48px] leading-tight';

  let positionClass = '';
  if (position === 'center') positionClass = 'items-center justify-center';
  if (position === 'bottom') positionClass = 'items-end justify-center';

  return (
    <div className={`flex ${positionClass} ${className}`}>
      <h2 className={`${sizeClass} font-bold mb-8 tracking-[-0.04em] text-white`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
