import { ICONS_NAMES } from "src/types/constants";

export interface ILink {
  href: string;
  text: string;
  theme?: 'dark' | 'light';
  isDisabled?: boolean;
  inApp?: boolean;
  variant?: string;
  iconAfter?: ICONS_NAMES;
}