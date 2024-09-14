import { Meta, StoryFn } from "@storybook/react";
import { useEffect } from "react";
import TorresLinkNext from ".";
import { ICONS_NAMES } from "src/types/constants";

const WithBodyClass: React.FC<{ Story: StoryFn }> = ({ Story }) => {
  useEffect(() => {
    document.body.classList.add("anhelo");
    console.log("body class added", document.body.classList);
  }, []);

  return <Story />;
};

export default {
  title: "Atoms/TorresLinkNext",
  argTypes: {
    isDisabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    inApp: {
      control: { type: "boolean" },
    },
    iconAfter: {
      control: { type: "select" },
      options: Object.values(ICONS_NAMES),
      if: { arg: "variant", eq: "secondary" },
    },
  },
  decorators: [(Story) => <WithBodyClass Story={Story} />],
} as Meta<typeof TorresLinkNext>;

const Template: StoryFn<typeof TorresLinkNext> = (args) => (
  <TorresLinkNext {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  href: "#",
  text: "Primary",
  inApp: true,
  isDisabled: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  href: "#",
  text: "See all brands",
  iconAfter: ICONS_NAMES.ARROW_RIGHT_TAIL,
  inApp: true,
  isDisabled: false,
  variant: "secondary",
};
