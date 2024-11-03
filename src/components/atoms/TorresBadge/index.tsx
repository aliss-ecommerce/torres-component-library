import React, { ReactNode } from 'react';
import './style.scss';

interface BadgeProps {
  children: ReactNode;
  variant?: string;
  size?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant="default", size='medium' }) => {
  return (
    <div className={`badge badge--${variant} badge--${size}`}>
      {children}
    </div>
  );
};

export default Badge;