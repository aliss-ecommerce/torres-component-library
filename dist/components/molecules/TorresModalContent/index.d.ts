import { default as React, FC } from 'react';
interface TorresModalContentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    position?: "left" | "right";
    zIndex?: number;
}
declare const TorresModalContent: FC<TorresModalContentProps>;
export default TorresModalContent;
