"use client";

import { useEffect, useRef, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import cn from "clsx";

import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  hide: () => void;
  modalClassName?: string;
  containerClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  hide,
  modalClassName,
  containerClassName,
}) => {
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
          <div className={cn(styles.modalContainer, containerClassName)}>
            <div
              className={cn(styles.modal, modalClassName)}
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
