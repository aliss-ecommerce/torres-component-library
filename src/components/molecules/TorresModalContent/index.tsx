import React, { FC, useRef, useEffect } from "react";
import "./style.scss";

interface TorresModalContentProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  position?: "left" | "right";
  zIndex?: number;
}

const TorresModalContent: FC<TorresModalContentProps> = ({
  children,
  isOpen,
  onClose,
  position = "left",
  zIndex =1
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [canAnimation, setCanAnimation] = React.useState(false);

  useEffect(() => {
    const handleClickOutside = async (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setCanAnimation(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <React.Fragment>
      <div
        className={`adaptive-modal-overlay adaptive-modal-overlay--${
          canAnimation && (isOpen ? "opening" : "closing")
        }`}
        style={{ zIndex: `${zIndex-1}` }}
      ></div>
      <div
        className={`adaptive-modal adaptive-modal--${
          canAnimation && (isOpen ? "opening" : "closing")
        }`}
        style={{ zIndex: `${zIndex}` }}
      >
        <div
          className={`adaptive-modal__content adaptive-modal__content--${position}`}
          ref={modalRef}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TorresModalContent;
