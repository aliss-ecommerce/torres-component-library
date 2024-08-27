import { Meta, StoryFn } from "@storybook/react";
import TorresTag from ".";

export default {
  title: 'Atoms/TorresTag',
  component: TorresTag
} as Meta;

export const Default: StoryFn<typeof TorresTag> = (args) => <TorresTag {...args} />;

Default.args = {
  text: '-50%',
};