import { Meta, StoryFn } from "@storybook/react";
import TorresButton from "./index";
import { useEffect } from "react";
import { BUTTON_TYPES, BUTTON_VARIANTS, ICONS_NAMES } from "types/constants";

const WithBodyClass: React.FC<{ Story: StoryFn }> = ({ Story }) => {
  useEffect(() => {
    document.body.classList.add("aliss");
    console.log("body class added", document.body.classList);
  }, []);

  return <Story />;
};

export default {
  title: "Atoms/Button/TorresButton",
  component: TorresButton,
  argTypes: {
    iconBefore: {
      options: Object.values(ICONS_NAMES),
      control: { type: "select" },
    },
    iconAfter: {
      options: Object.values(ICONS_NAMES),
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    type: {
      options: Object.values(BUTTON_TYPES),
      control: { type: "select" },
    },
  },
  decorators: [(Story) => <WithBodyClass Story={Story} />],
} as Meta<typeof TorresButton>;

const Template: StoryFn<typeof TorresButton> = (args) => (
  <TorresButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: BUTTON_VARIANTS.PRIMARY,
  text: "Load More",
  iconAfter: ICONS_NAMES.ARROW_LEFT_TAIL,
  type: BUTTON_TYPES.BUTTON,
  isDisabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: BUTTON_VARIANTS.SECONDARY,
  text: "secondary",
  type: BUTTON_TYPES.BUTTON,
  isDisabled: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: BUTTON_VARIANTS.TERTIARY,
  text: "tertiary",
  type: BUTTON_TYPES.BUTTON,
  isDisabled: false,
};
