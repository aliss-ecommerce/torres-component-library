import { Meta, StoryFn } from "@storybook/react";
import TorresFilter from '.';
import { FILTER_TYPE } from "src/types";

export default {
  title: "Organisms/TorresFilter",
  component: TorresFilter,
  argTypes: {
    config: {
      description: "Configurations for the filter",
      table: {
        category: "Filters",
      },
    },
  },
} as Meta;

export const Default: StoryFn<typeof TorresFilter> = (args) => (
  <TorresFilter {...args} />
);

Default.args = {
  config: {
    category: {
      label: "Category",
      type: FILTER_TYPE.ITEM,
      value: "", // Añadir propiedad value
      placeholder: "Select a category", // Añadir propiedad placeholder
      typeLabel: "Category Type", // Añadir propiedad typeLabel
      items: [
        { value: "1", label: "Category 1", isSelected: false },
        { value: "2", label: "Category 2", isSelected: false },
        { value: "3", label: "Category 3", isSelected: false },
        { value: "4", label: "Category 4", isSelected: false },
      ],
    },
    color: {
      label: "Color",
      type: FILTER_TYPE.ITEMS,
      value: "", // Añadir propiedad value
      placeholder: "Select a color", // Añadir propiedad placeholder
      typeLabel: "Color Type", // Añadir propiedad typeLabel
      items: [
        //IButtonColor
        { id: "1", color: "#00f00e", isSelected: false },
        { id: "2", color: "#fe3321", isSelected: false },
        { id: "3", color: "#dff000", isSelected: false },
        { id: "4", color: "#ff0055", isSelected: false },
      ],
    },
    size: {
      label: "Size",
      type: FILTER_TYPE.ITEMS,
      value: "", // Añadir propiedad value
      placeholder: "Select a size", // Añadir propiedad placeholder
      typeLabel: "Size Type", // Añadir propiedad typeLabel
      items: [
        { value: "1", label: "S", isSelected: false },
        { value: "2", label: "M", isSelected: false },
        { value: "3", label: "L", isSelected: false },
        { value: "4", label: "XL", isSelected: false },
        { value: "5", label: "ONE PIECE", isSelected: false },
        { value: "6", label: "STANDAR", isSelected: false },
      ],
    },
    style: {
      label: "Style",
      type: FILTER_TYPE.ITEMS,
      value: "", // Añadir propiedad value
      placeholder: "Select a style", // Añadir propiedad placeholder
      typeLabel: "Style Type", // Añadir propiedad typeLabel
      items: [
        { value: "1", label: "Style 1", isSelected: false },
        { value: "2", label: "Style 2", isSelected: false },
        { value: "3", label: "Style 3", isSelected: false },
        { value: "4", label: "Style 4", isSelected: false },
      ],
    },
  },
  change: (selected) => console.log(selected),
};
