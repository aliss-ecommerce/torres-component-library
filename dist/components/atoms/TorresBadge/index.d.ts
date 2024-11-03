import { default as React, ReactNode } from 'react';
interface BadgeProps {
    children: ReactNode;
    variant?: string;
    size?: string;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
