import { render, screen } from "@testing-library/react";
import ErrorBoundary from "./error-boundary";

describe("Error Boundary", () => {
  it("should render with message when provided", () => {
    render(
      <ErrorBoundary
        svg="x-mark"
        header="Error Occurred"
        message="Please try again later"
      />
    );

    expect(screen.getByText("Error Occurred")).toBeInTheDocument();
    expect(screen.getByText("Please try again later")).toBeInTheDocument();
  });
});
