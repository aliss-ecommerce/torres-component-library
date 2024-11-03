import { Meta, StoryFn } from "@storybook/react";
import TorresBannerOne from ".";
import { IMAGE_RATIO_ASPECTS } from "src/types/constants";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

const WithBodyClass: React.FC<{ Story: StoryFn }> = ({ Story }) => {
  useEffect(() => {
    document.body.classList.add('anhelo');
  }, []);

  return <Story />;
};

export default {
  title: 'Molecules/TorresBannerOne',
  component: TorresBannerOne,
  argTypes: {
    title: {
      control: 'text',
    },
  },
  decorators: [(Story) => <BrowserRouter><WithBodyClass Story={Story} /></BrowserRouter>],
} as Meta;

export const Default: StoryFn<typeof TorresBannerOne> = (args) => <TorresBannerOne {...args} />;

Default.args = {
  title: 'Coats',
  image: {
    url: '',
    alt: 'TorresBannerOne',
    aspectRatio: IMAGE_RATIO_ASPECTS.BANNER_ONE,
  },
  toRedirect: {
    text: 'Explora',
    href: '#',
  },
};