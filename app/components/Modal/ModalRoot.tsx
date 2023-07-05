"use client";

import { memo } from "react";
import ReactDOM from "react-dom";

import { ModalType } from "./ModalContext";

interface ModalRootProp {
  modals: Record<string, ModalType>;
}

interface ModalRendererProps {
  component: ModalType;
}

const ModalRenderer = memo(({ component, ...rest }: ModalRendererProps) =>
  component(rest)
);

ModalRenderer.displayName = "ModalRenderer";

export const ModalRoot: React.FC<ModalRootProp> = memo(({ modals }) => {
  if (typeof document === "undefined") {
    return;
  }

  return ReactDOM.createPortal(
    <>
      {Object.keys(modals).map((key) => (
        <ModalRenderer key={key} component={modals[key]} />
      ))}
    </>,
    document.body
  );
});

ModalRoot.displayName = "ModalRoot";
