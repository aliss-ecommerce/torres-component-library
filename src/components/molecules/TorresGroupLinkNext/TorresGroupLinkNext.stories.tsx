import { Meta, StoryFn } from "@storybook/react";
import TorresGroupLinkNext from ".";

export default {
  title: "Molecules/TorresGroupLinkNext",
  component: TorresGroupLinkNext,
} as Meta;

export const Default: StoryFn<typeof TorresGroupLinkNext> = (args) => (
  <TorresGroupLinkNext {...args} />
);

Default.args = {
  group: "category",
  items: [
    { value: "calzado", label: "Calzado", isSelected: true },
    { value: "Blazers", label: "Blazers" },
    { value: "Camisas", label: "Camisas" },
    { value: "Pantalones", label: "Pantalones" },
    { value: "Shorts", label: "Shorts" },
    { value: "Sudaderas", label: "Sudaderas" },
    { value: "Tops", label: "Tops" },
    { value: "Vestidos", label: "Vestidos" },
  ],
  onSelect: (selected) => console.log(selected),
  multiple: false,
  wrapContent: false,
};
