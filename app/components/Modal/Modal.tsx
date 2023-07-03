"use client";

import { useEffect, useRef } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { useOnClickOutside } from "@/app/hooks/useOnClickOutside";

import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  hide: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, hide }) => {
  const modalRootRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside([{ current: modalRef.current }], hide);

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
      <div ref={modalRef} className={styles.window}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
