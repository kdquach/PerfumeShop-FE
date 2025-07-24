import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
          animate-spin
          rounded-full
          border-4
          border-primary
          border-t-transparent
          ${sizeClasses[size]}
          ${className}
        `}
      />
    </div>
  );
};

export default Spinner; 