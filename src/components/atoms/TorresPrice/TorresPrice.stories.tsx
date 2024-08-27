import { Meta, StoryFn } from "@storybook/react";
import TorresPrice from ".";
import { CURRENCY_SYMBOLS } from "src/types/constants";

export default {
  title: 'Atoms/TorresPrice',
  component: TorresPrice,
  argTypes: {
    currency: {
      control: 'select',
      options: Object.values(CURRENCY_SYMBOLS),
    }
  },
} as Meta;

const Template: StoryFn<typeof TorresPrice> = (args) => <TorresPrice {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 19000,
  currency: 'PEN',
  through: false,
};