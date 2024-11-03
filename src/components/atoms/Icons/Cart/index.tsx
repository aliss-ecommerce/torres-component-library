import { FC } from "react";
import "./style.scss";
import { IIcon } from "../../../../types/models";

const CartIcon: FC<IIcon> = ({ size, variant = "primary" }) => {
  return (
    <svg
      viewBox="0 0 16 17"
      className={`cart-icon cart-icon--${variant} cart-icon--${size}`}
    >
      <path
        d="M3.49466 3.7065H10.8349C13.044 3.7065 14.8349 5.49736 14.8349 7.7065V7.80144C14.8349 10.0106 13.044 11.8014 10.8349 11.8014H8.29412C6.35774 11.8014 4.69942 10.4144 4.35712 8.50854L3.49466 3.7065ZM3.49466 3.7065L3.14396 2.67743C3.00591 2.27234 2.62539 2 2.19742 2H1.16846"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M7.3335 14.166H7.34016"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12.6665 14.166H12.6732"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default CartIcon;
