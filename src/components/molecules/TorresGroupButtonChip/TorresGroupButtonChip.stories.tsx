import { Meta, StoryFn } from "@storybook/react";
import TorresGroupButtonChip from ".";

export default {
  title: "Molecules/TorresGroupButtonChip",
  component: TorresGroupButtonChip,
} as Meta;

export const Default: StoryFn<typeof TorresGroupButtonChip> = (args) => (
  <TorresGroupButtonChip {...args} />
);

Default.args = {
  group: "colors",
  items: [
    { value: "1333", label: "S" },
    { value: "1", label: "M" },
    { value: "3", label: "L" },
    { value: "4", label: "XL" },
    { value: "6", label: "On Size" },
  ],
  multiple: true,
  onSelect: (selected) => console.log(selected),
};
