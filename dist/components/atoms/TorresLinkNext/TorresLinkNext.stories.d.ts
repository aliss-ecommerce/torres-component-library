import { Meta } from '@storybook/react';
import { default as TorresLinkNext } from '.';
declare const _default: Meta<typeof TorresLinkNext>;
export default _default;
export declare const Primary: import('@storybook/csf').AnnotatedStoryFn<
  import('@storybook/react').ReactRenderer,
  Partial<import('../../..').ILink> & {
    action?: () => void;
    isActionDisabled?: boolean;
    cursorPointerInDisabled?: boolean;
  }
>;
export declare const Secondary: import('@storybook/csf').AnnotatedStoryFn<
  import('@storybook/react').ReactRenderer,
  Partial<import('../../..').ILink> & {
    action?: () => void;
    isActionDisabled?: boolean;
    cursorPointerInDisabled?: boolean;
  }
>;
