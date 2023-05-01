import type { Meta, StoryObj } from "@storybook/react";

import CommonForm from "../app/components/form/CommonForm";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/CommonForm",
  component: CommonForm,
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof CommonForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
};
