import { memo } from "react";
import ReactDOM from "react-dom";

import { ModalType } from "./ModalContext";

interface ModalRootProp {
  modals: Record<string, ModalType>;
}

export const ModalRoot: React.FC<ModalRootProp> = memo(({ modals }) => {
  return ReactDOM.createPortal(
    <>{Object.keys(modals).map((key) => modals[key])}</>,
    document.body
  );
});
