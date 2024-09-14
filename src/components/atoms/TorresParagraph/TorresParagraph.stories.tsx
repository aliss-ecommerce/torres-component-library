import { Meta, StoryFn } from "@storybook/react";
import TorresParagraph from ".";

export default {
  title: "Atoms/TorresParagraph",
  component: TorresParagraph,
  argTypes: {
    text: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
    },
  },
} as Meta;

export const Default: StoryFn<typeof TorresParagraph> = (args) => (
  <TorresParagraph {...args} />
);

Default.args = {
  text: "Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final. ",
};
