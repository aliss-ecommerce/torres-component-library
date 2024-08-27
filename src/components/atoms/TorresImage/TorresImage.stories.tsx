import { Meta, StoryFn } from "@storybook/react";
import TorresImage from ".";
import { IMAGE_RATIO_ASPECTS } from "src/types/constants";

export default {
  title: 'Atoms/TorresImage',
  component: TorresImage,
  argTypes: {
    url: {
      control: 'text',
      description: 'Image URL',
      table: {
        category: 'Data',
      },
    },
    alt: {
      control: 'text',
      description: 'Image alt',
      table: {
        category: 'Data',
      },
    },
    aspectRatio: {
      control: 'text',
      description: 'Image aspect ratio',
      table: {
        category: 'Data',
      },
    },
  },
} as Meta;

const Template: StoryFn<typeof TorresImage> = (args) => <div style={{width:"426px"}}><TorresImage {...args} /></div>;

export const Default = Template.bind({});

Default.args = {
  url: 'https://via.placeholder.com/150',
  alt: 'Placeholder',
  aspectRatio: IMAGE_RATIO_ASPECTS.CARD,
};