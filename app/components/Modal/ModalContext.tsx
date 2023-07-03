import { createContext } from "react";

export type ModalType = React.FC<unknown>;

interface ModalContextType {
  showModal: (key: string, component: ModalType) => void;
  hideModal: (key: string) => void;
}

const invariantViolation = (): Error => {
  throw new Error("Attempt to call useModal outside of context");
};

export const ModalContext = createContext<ModalContextType>({
  showModal: invariantViolation,
  hideModal: invariantViolation,
});
