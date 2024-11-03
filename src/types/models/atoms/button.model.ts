import { BUTTON_TYPES, BUTTON_VARIANTS, ICONS_NAMES } from "../../constants";

export interface IButton {
  variant?: BUTTON_VARIANTS;
  iconBefore?: ICONS_NAMES;
  iconAfter?: ICONS_NAMES;
  text: string;
  action?: () => void;
  type?: BUTTON_TYPES;
  theme?: "dark" | "light";
  isDisabled?: boolean;
  isWidthAll?: boolean;
  isWidthAllMobile?: boolean;
}

export interface IButtonIcon {
  variant?: BUTTON_VARIANTS;
  icon: ICONS_NAMES;
  action?: () => void;
  theme?: "dark" | "light";
  isDisabled?: boolean;
}

export interface IButtonColor {
  id: string | number;
  color: string;
  name?: string;
  isSelected?: boolean;
  action?: () => void;
}

export type IButtonChip = Pick<IButton, "text"> &
  Partial<IButton> & { isSelected?: boolean };
