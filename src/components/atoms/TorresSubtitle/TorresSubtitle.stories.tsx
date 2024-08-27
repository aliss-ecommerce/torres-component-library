import { Meta, StoryFn } from "@storybook/react";
import TorresSubtitle from ".";

export default {
  title: 'Atoms/TorresSubtitle',
  component: TorresSubtitle,
  argTypes: {
    text: { control: 'text' },
  },
} as Meta;

export const Default: StoryFn<typeof TorresSubtitle> = (args) => <TorresSubtitle {...args} />;

Default.args = {
  text: 'Purses',
};