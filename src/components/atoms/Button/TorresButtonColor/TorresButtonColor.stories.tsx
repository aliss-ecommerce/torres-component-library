import { Meta, StoryFn } from "@storybook/react";
import TorresButtonColor from ".";

export default {
  title: "atoms/Button/TorresButtonColor",
  component: TorresButtonColor,
  argTypes: {
    color: { control: "color" },
    isSelected: { control: "boolean" },
  },
} as Meta;

export const Default: StoryFn<typeof TorresButtonColor> = (args) => (
  <TorresButtonColor {...args} />
);

Default.args = {
  id: "1",
  name: "begro",
  color: "#000",
  isSelected: false,
};
