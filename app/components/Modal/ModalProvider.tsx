import { useCallback, useMemo, useState } from "react";
import { ModalContext, ModalType } from "./ModalContext";
import { ModalRoot } from "./ModalRoot";

const ModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [modals, setModals] = useState<Record<string, ModalType>>({});

  const showModal = useCallback(
    (key: string, modal: ModalType) =>
      setModals((existModals) => ({
        ...existModals,
        [key]: modal,
      })),

    []
  );

  const hideModal = useCallback(
    (key: string) =>
      setModals((existModals) => {
        const newModal = { ...existModals };

        delete newModal[key];

        return newModal;
      }),
    []
  );

  const contextValue = useMemo(
    () => ({ showModal, hideModal }),
    [showModal, hideModal]
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <>
        {children}
        <ModalRoot modals={modals} />
      </>
    </ModalContext.Provider>
  );
};

export { ModalProvider };
