import React from "react";
import ReactDom from "react-dom";
import * as styles from "./modal.m.scss";

export default function Modal({ open, handleClose, children }: { open: boolean; handleClose: () => void; children: React.ReactNode }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div
        className={styles.overlay}
        tabIndex={0}
        role="button"
        onClick={handleClose}
        onKeyDown={(e) => {
          if (e.key === "Escape" || e.key === " ") {
            handleClose();
          }
        }}
        aria-labelledby="ModalLabel"
      />
      <div className={styles.modal}>{children}</div>
    </>,
    document.body as HTMLElement,
  );
}
