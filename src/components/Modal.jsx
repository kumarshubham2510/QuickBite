import { useEffect } from "react";
import { createPortal } from "react-dom";
export default function Modal({ children, open, className }) {
  const dialog = ref();
  useEffect(() => {
    if (open) {
      dialog.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.findElementById("modal")
  );
}
