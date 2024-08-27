import { BUTTON_TYPES, BUTTON_VARIANTS, ICONS_NAMES } from "../../constants";

export interface IButton {
  variant?: BUTTON_VARIANTS;
  iconBefore?: ICONS_NAMES;
  iconAfter?: ICONS_NAMES;
  text: string;
  action?: () => void;
  type?: BUTTON_TYPES;
  theme?: 'dark' | 'light';
  isDisabled?: boolean;
}