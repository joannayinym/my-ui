import { describe, it, expect } from "vitest";
import * as ButtonStories from "./Button.stories";

describe("Button Stories", () => {
  it("exports default meta", () => {
    expect(ButtonStories.default).toBeDefined();
    expect(ButtonStories.default.title).toBe("Components/Button");
    expect(ButtonStories.default.component).toBeDefined();
  });

  it("has correct story structure", () => {
    const stories = [
      "Default",
      "Primary",
      "Secondary",
      "Outline",
      "Ghost",
      "Small",
      "Large",
      "Disabled",
      "Submit",
      "Interactive",
      "AllVariants",
      "AllSizes",
      "WithIcon",
      "Loading",
    ];

    stories.forEach((storyName) => {
      expect(
        ButtonStories[storyName as keyof typeof ButtonStories]
      ).toBeDefined();
    });
  });

  it("Default story has correct args", () => {
    const defaultStory = ButtonStories.Default;
    expect(defaultStory.args).toBeDefined();
    expect(defaultStory.args?.children).toBe("Click me");
  });

  it("Primary story has correct variant", () => {
    const primaryStory = ButtonStories.Primary;
    expect(primaryStory.args?.variant).toBe("primary");
    expect(primaryStory.args?.children).toBe("Primary Button");
  });

  it("Secondary story has correct variant", () => {
    const secondaryStory = ButtonStories.Secondary;
    expect(secondaryStory.args?.variant).toBe("secondary");
    expect(secondaryStory.args?.children).toBe("Secondary Button");
  });

  it("Outline story has correct variant", () => {
    const outlineStory = ButtonStories.Outline;
    expect(outlineStory.args?.variant).toBe("outline");
    expect(outlineStory.args?.children).toBe("Outline Button");
  });

  it("Ghost story has correct variant", () => {
    const ghostStory = ButtonStories.Ghost;
    expect(ghostStory.args?.variant).toBe("ghost");
    expect(ghostStory.args?.children).toBe("Ghost Button");
  });

  it("Small story has correct size", () => {
    const smallStory = ButtonStories.Small;
    expect(smallStory.args?.size).toBe("small");
    expect(smallStory.args?.children).toBe("Small Button");
  });

  it("Large story has correct size", () => {
    const largeStory = ButtonStories.Large;
    expect(largeStory.args?.size).toBe("large");
    expect(largeStory.args?.children).toBe("Large Button");
  });

  it("Disabled story has correct disabled state", () => {
    const disabledStory = ButtonStories.Disabled;
    expect(disabledStory.args?.disabled).toBe(true);
    expect(disabledStory.args?.children).toBe("Disabled Button");
  });

  it("Submit story has correct type", () => {
    const submitStory = ButtonStories.Submit;
    expect(submitStory.args?.type).toBe("submit");
    expect(submitStory.args?.children).toBe("Submit");
  });

  it("Loading story has correct disabled state", () => {
    const loadingStory = ButtonStories.Loading;
    expect(loadingStory.args?.disabled).toBe(true);
    expect(loadingStory.args?.children).toBe("Loading...");
  });

  it("Interactive story has render function", () => {
    const interactiveStory = ButtonStories.Interactive;
    expect(typeof interactiveStory.render).toBe("function");
  });

  it("AllVariants story has render function", () => {
    const allVariantsStory = ButtonStories.AllVariants;
    expect(typeof allVariantsStory.render).toBe("function");
  });

  it("AllSizes story has render function", () => {
    const allSizesStory = ButtonStories.AllSizes;
    expect(typeof allSizesStory.render).toBe("function");
  });

  it("WithIcon story has render function", () => {
    const withIconStory = ButtonStories.WithIcon;
    expect(typeof withIconStory.render).toBe("function");
  });

  it("meta has correct argTypes", () => {
    const meta = ButtonStories.default;
    expect(meta.argTypes).toBeDefined();

    const expectedArgTypes = [
      "children",
      "variant",
      "size",
      "disabled",
      "type",
      "onClick",
      "testId",
      "className",
    ];

    expectedArgTypes.forEach((argType) => {
      expect(
        meta.argTypes![argType as keyof typeof meta.argTypes]
      ).toBeDefined();
    });
  });

  it("meta has correct parameters", () => {
    const meta = ButtonStories.default;
    expect(meta.parameters).toBeDefined();
    expect(meta.parameters!.layout).toBe("centered");
    expect(meta.parameters!.docs).toBeDefined();
    expect(meta.parameters!.docs.description.component).toContain(
      "styled-components"
    );
  });

  it("meta has correct tags", () => {
    const meta = ButtonStories.default;
    expect(meta.tags).toContain("autodocs");
  });
});
