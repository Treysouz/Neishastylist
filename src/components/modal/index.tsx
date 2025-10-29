"use client";

import { ReactNode, type RefObject } from "react";

interface ModalProps {
  /** Reference to dialog element for modal */
  ref: RefObject<HTMLDialogElement | null>;
  /** Component to render as modal content */
  children: ReactNode;
}

export default function Modal({ children, ref }: ModalProps) {
  return (
    <dialog id="my_modal_2" className="modal" ref={ref}>
      <div className="modal-box p-0">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>Close Modal</button>
      </form>
    </dialog>
  );
}
