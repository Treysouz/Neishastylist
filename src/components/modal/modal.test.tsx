import { render, screen, fireEvent } from "@testing-library/react";
import { useRef } from "react";
import Modal from "./modal";

// Wrapper component to provide ref and controls
function TestModalWrapper({ children }: { children: React.ReactNode }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal Control</button>
      <Modal ref={modalRef}>{children}</Modal>
    </>
  );
}

beforeEach(() => {
  // Mock HTMLDialogElement methods if not available in test environment
  if (!HTMLDialogElement.prototype.showModal) {
    HTMLDialogElement.prototype.showModal = jest.fn(function (
      this: HTMLDialogElement
    ) {
      this.setAttribute("open", "");
    });
  }
  if (!HTMLDialogElement.prototype.close) {
    HTMLDialogElement.prototype.close = jest.fn(function (
      this: HTMLDialogElement
    ) {
      this.removeAttribute("open");
    });
  }
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Modal Component", () => {
  it("should open modal when showModal is called via ref", () => {
    render(
      <TestModalWrapper>
        <div>Content</div>
      </TestModalWrapper>
    );

    const openButton = screen.getByText("Open Modal");
    fireEvent.click(openButton);

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalled();
  });

  it("should close modal when close is called via ref", () => {
    render(
      <TestModalWrapper>
        <div>Content</div>
      </TestModalWrapper>
    );

    const openButton = screen.getByText("Open Modal");
    fireEvent.click(openButton);

    const closeButton = screen.getByText("Close Modal Control");
    fireEvent.click(closeButton);

    expect(HTMLDialogElement.prototype.close).toHaveBeenCalled();
  });
});
