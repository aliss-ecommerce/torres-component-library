import { Meta, StoryFn } from "@storybook/react";
import { IMAGE_RATIO_ASPECTS } from "src/types/constants";
import bannerTwo from "src/assets/bannerTwo.png";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import TorresBannerTwo from ".";

const WithBodyClass: React.FC<{ Story: StoryFn }> = ({ Story }) => {
  useEffect(() => {
    document.body.classList.add('anhelo');
  }, []);

  return <Story />;
};

export default {
  title: 'Molecules/TorresBannerTwo',
  component: TorresBannerTwo,
  argTypes: {
    title: {
      control: 'text',
    },
  },
  decorators: [(Story) => <BrowserRouter><WithBodyClass Story={Story} /></BrowserRouter>],
} as Meta;

export const Default: StoryFn<typeof TorresBannerTwo> = (args) => <TorresBannerTwo {...args} />;

Default.args = {
  title: 'Purses',
  image: {
    url: bannerTwo,
    alt: 'TorresBannerOne',
    aspectRatio: IMAGE_RATIO_ASPECTS.BANNER_TWO,
  },
  toRedirect: {
    text: 'Explora',
    href: '#',
  },
};