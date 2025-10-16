import { describe, expect, it, beforeEach, afterEach } from "@jest/globals";
import { render, act } from "@testing-library/react";
import Nav from "./nav";

beforeEach(() => {
  // Mock IntersectionObserver
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Nav Component", () => {
  it("should have the appropirate class when window is scrolled from top", () => {
    const screen = render(<Nav />);

    act(() => {
      // Change the viewport
      global.scrollY = 1270;
      global.dispatchEvent(new Event("scroll"));
    });

    const nav = screen.getByRole("navigation");

    expect(nav).toHaveClass("bg-logo-dark shadow-2xl");
  });
});
