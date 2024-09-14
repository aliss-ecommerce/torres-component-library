import { Meta, StoryFn } from "@storybook/react";
import TorresCardProduct from ".";
import { IMAGE_RATIO_ASPECTS } from "src/types/constants";
import product_1 from "src/assets/product_1.jpeg";

export default {
  title: "Molecules/TorresCardProduct",
  component: TorresCardProduct,
  argTypes: {
    action: { action: "clicked" },
  },
} as Meta;

export const Default: StoryFn<typeof TorresCardProduct> = (args) => (
  <div
    style={{
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    }}
  >
    <TorresCardProduct {...args} />
    <TorresCardProduct {...args} />
  </div>
);

Default.args = {
  name: "Hanlo Suit",
  price: 18900,
  priceList: 15120,
  image: {
    url: product_1,
    alt: "Placeholder",
    aspectRatio: IMAGE_RATIO_ASPECTS.CARD,
  },
  action: () => console.log("clicked"),
};
