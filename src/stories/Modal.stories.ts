import type { Meta, StoryObj } from "@storybook/react";
import { ModalPlugin } from "../components/Modal/Modal";

const meta: Meta<typeof ModalPlugin> = {
  title: "Components/Modal",
  component: ModalPlugin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    modalContent: {
      control: "text",
      description: "customize content of modal",
    },
    isOpen: {
      control: "boolean",
      description: "open or close modal",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalContent: "le contenu de la modal",
    isOpen: false,
  },
};
