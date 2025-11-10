import { render, screen, fireEvent } from "@testing-library/react";
import ImageCard from "./image-card";

const mockImgUrl = "/images/test-image.jpg";
const mockOnClick = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

describe("Image Card", () => {
  it("should call onClick handler when clicked", () => {
    render(<ImageCard imgUrl={mockImgUrl} onClick={mockOnClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
