import { render, screen } from "@testing-library/react";
import NavItem from "./nav-item";

describe("Nav Item component", () => {
  it("should apply active styling when isActive is true", () => {
    const linkText = "Contact";

    render(
      <NavItem href="/#contact" isActive={true}>
        {linkText}
      </NavItem>
    );

    const link = screen.getByText(linkText);

    expect(link).toHaveClass("border-primary");
  });

  it("should not apply active styling when isActive is false", () => {
    const linkText = "Contact";

    render(
      <NavItem href="/#contact" isActive={false}>
        {linkText}
      </NavItem>
    );

    const link = screen.getByText(linkText);

    expect(link).not.toHaveClass("border-primary");
  });

  it("should apply custom className", () => {
    const customClass = "custom-nav-item";

    render(
      <NavItem href="/#test" className={customClass}>
        Test
      </NavItem>
    );

    const link = screen.getByText("Test");

    expect(link).toHaveClass(customClass);
  });
});
