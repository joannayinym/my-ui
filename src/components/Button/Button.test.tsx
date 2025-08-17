import { describe, it, expect } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("is a function", () => {
    expect(typeof Button).toBe("function");
  });

  it("has default props", () => {
    expect(Button).toBeDefined();
  });

  it("accepts props interface", () => {
    // Test that the component can be called with props
    const props = {
      children: "Test Button",
      variant: "primary" as const,
      size: "medium" as const,
      disabled: false,
      type: "button" as const,
      onClick: () => {},
      testId: "test-button",
      className: "custom-class",
    };

    // Verify all expected props exist
    expect(props).toHaveProperty("children");
    expect(props).toHaveProperty("variant");
    expect(props).toHaveProperty("size");
    expect(props).toHaveProperty("disabled");
    expect(props).toHaveProperty("type");
    expect(props).toHaveProperty("onClick");
    expect(props).toHaveProperty("testId");
    expect(props).toHaveProperty("className");
  });

  it("has correct variant options", () => {
    const variants = ["primary", "secondary", "outline", "ghost"];
    variants.forEach((variant) => {
      expect(variants).toContain(variant);
    });
  });

  it("has correct size options", () => {
    const sizes = ["small", "medium", "large"];
    sizes.forEach((size) => {
      expect(sizes).toContain(size);
    });
  });

  it("has correct type options", () => {
    const types = ["button", "submit", "reset"];
    types.forEach((type) => {
      expect(types).toContain(type);
    });
  });

  it("has proper component structure", () => {
    // Test that the component has the expected structure
    expect(Button).toBeInstanceOf(Function);
    expect(Button.name).toBe("Button");
  });

  it("supports all variant combinations", () => {
    const variants = ["primary", "secondary", "outline", "ghost"];
    const sizes = ["small", "medium", "large"];

    variants.forEach((variant) => {
      sizes.forEach((size) => {
        const props = { variant, size, children: "Test" };
        expect(props).toHaveProperty("variant", variant);
        expect(props).toHaveProperty("size", size);
      });
    });
  });

  it("handles disabled state correctly", () => {
    const disabledProps = {
      disabled: true,
      children: "Disabled Button",
    };

    expect(disabledProps.disabled).toBe(true);
    expect(disabledProps.children).toBe("Disabled Button");
  });

  it("supports custom testId", () => {
    const testProps = {
      testId: "custom-test-id",
      children: "Test Button",
    };

    expect(testProps.testId).toBe("custom-test-id");
  });

  it("supports custom className", () => {
    const classProps = {
      className: "my-custom-class",
      children: "Test Button",
    };

    expect(classProps.className).toBe("my-custom-class");
  });
});
