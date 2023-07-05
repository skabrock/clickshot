"use client";

import { useEffect, useRef, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  hide: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, hide }) => {
  const modalRootRef = useRef<HTMLDivElement>(null);
  const [modalElement, setModalElement] = useState<HTMLElement>();

  useOnClickOutside(
    [{ current: modalElement } as React.RefObject<HTMLElement>],
    hide
  );

  useEffect(() => {
    const el = modalRootRef.current;

    if (el) {
      disablePageScroll(el);
    }

    return () => {
      if (el) {
        enablePageScroll(el);
      }
    };
  }, []);

  return (
    <div ref={modalRootRef} className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.modalContainer}>
            <div
              className={styles.modal}
              ref={setModalElement as React.LegacyRef<HTMLDivElement>}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
