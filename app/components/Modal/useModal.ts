"use client";

import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ModalContext, ModalType } from "./ModalContext";

type ShowModal = () => void;
type HideModal = () => void;

const generateModalKey = (() => {
  let count = 0;

  return (): string => `${++count}`;
})();

export const useModal = (
  component: ModalType,
  inputs: unknown[] = []
): [ShowModal, HideModal] => {
  const key = useMemo(generateModalKey, []);
  const modal = useMemo(() => component, [inputs]);

  const context = useContext(ModalContext);

  const [isShown, setShown] = useState<boolean>(false);

  const showModal = useCallback(() => setShown(true), []);
  const hideModal = useCallback(() => setShown(false), []);

  useEffect(() => {
    if (isShown) {
      context.showModal(key, modal);
    } else {
      context.hideModal(key);
    }
  });

  return [showModal, hideModal];
};
