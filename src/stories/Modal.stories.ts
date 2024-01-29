import type { Meta, StoryObj } from "@storybook/react";
import { ModalPlugin } from "../components/Modal/Modal";

const meta = {
  title: "Components/Modal",
  component: ModalPlugin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    buttonValue: {
      control: "text",
      description: "customize value of button",
    },
    modalContent: {
      control: "text",
      description: "customize content of modal",
    },
    buttonSize: {
      control: "radio",
      options: ["small", "middle", "large"],
      description: "choose size of button",
    },
  },
} satisfies Meta<typeof ModalPlugin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonValue: "Open",
    modalContent: "le contenu de la modal",
    buttonSize: "middle",
  },
};
