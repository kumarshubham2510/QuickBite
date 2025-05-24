import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRef } from "react";

import UserProgressContext from "../store/UserProgressContext";

export default function Modal({ children, open, className, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
