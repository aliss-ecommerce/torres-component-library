import { Meta, StoryFn } from "@storybook/react";
import TorresTitle from ".";

export default {
  title: "Atoms/TorresTitle",
  component: TorresTitle,
  argTypes: {
    text: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    align: { control: "select", options: ["left", "center", "right"] },
  },
} as Meta;

export const Default: StoryFn<typeof TorresTitle> = (args) => (
  <TorresTitle {...args} />
);

Default.args = {
  text: "Purses",
};
