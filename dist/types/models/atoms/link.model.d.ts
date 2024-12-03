import { ICONS_NAMES } from '../../../../../../../src/types/constants';
export interface ILink {
  id?: string;
  href: string;
  text: string;
  theme?: 'dark' | 'light';
  isDisabled?: boolean;
  inApp?: boolean;
  variant?: string;
  iconAfter?: ICONS_NAMES;
}
export type IlinkNext = Partial<ILink> & {
  action?: () => void;
  isActionDisabled?: boolean;
  cursorPointerInDisabled?: boolean;
};
