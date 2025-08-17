import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component built with styled-components. Supports multiple variants, sizes, and states with hover effects and accessibility features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Button text content",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost"],
      description: "Button variant style",
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
      description: "Button size",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "Button type",
    },
    onClick: {
      action: "clicked",
      description: "Click handler function",
    },
    testId: {
      control: "text",
      description: "Test ID for testing purposes",
    },
    className: {
      control: "text",
      description: "Custom CSS class name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
  args: {
    children: "Click Meeee",
  },
};

// Primary button
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

// Outline button
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

// Ghost button
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

// Small button
export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

// Large button
export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// Submit button
export const Submit: Story = {
  args: {
    type: "submit",
    children: "Submit",
  },
};

// Interactive button with state
export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    return (
      <Button onClick={() => setCount(count + 1)}>Clicked {count} times</Button>
    );
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

// Button with icon (example)
export const WithIcon: Story = {
  render: () => (
    <Button>
      <span style={{ marginRight: "8px" }}>→</span>
      Continue
    </Button>
  ),
};

// Loading state (disabled with custom text)
export const Loading: Story = {
  args: {
    disabled: true,
    children: "Loading...",
  },
};
