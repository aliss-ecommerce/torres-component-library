import { Meta, StoryFn } from "@storybook/react";
import TorresButtonIcon from ".";
import { ICONS_NAMES } from "src/types/constants";

export default {
  title: "atoms/Button/TorresButtonIcon",
  component: TorresButtonIcon,
} as Meta;

export const Default: StoryFn<typeof TorresButtonIcon> = (args) => (
  <TorresButtonIcon {...args} />
);

Default.args = {
  icon: ICONS_NAMES.CLOSE,
  action: () => console.log("click"),
  isDisabled: false,
};
