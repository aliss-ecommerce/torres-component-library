import { Meta, StoryFn } from "@storybook/react";
import TorresGroupButtonColor from ".";

export default {
  title: "Molecules/TorresGroupButtonColor",
  component: TorresGroupButtonColor,
  argTypes: {
    change: {
      action: "change",
      description: "Function to be executed when the color is selected",
      table: {
        category: "Events",
      },
    },
    multiple: { control: "boolean" },
  },
} as Meta;

export const Default: StoryFn<typeof TorresGroupButtonColor> = (args) => (
  <TorresGroupButtonColor {...args} />
);

Default.args = {
  group: "colors",
  items: [
    { id: "1", color: "#000", isSelected: false },
    { id: "3", color: "#f00" },
    { id: "4", color: "#0f0", isSelected: false },
    { id: "5", color: "#00f" },
  ],
  onSelect: (selected) => console.log(selected),
  multiple: false,
};
