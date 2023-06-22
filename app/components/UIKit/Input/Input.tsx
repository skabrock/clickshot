"use client";

import { useState } from "react";
import cn from "clsx";

import styles from "./Input.module.scss";

import EyeIcon from "../../../images/eye-icon.svg";

type InputProps = {
  value?: string | number;
  id?: string;
  type?: "text" | "date" | "email" | "password";
  label?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  value,
  id,
  type = "text",
  label,
  className,
}) => {
  const [isPwShown, setIsPwShown] = useState(false);

  const togglePwShown = () => {
    setIsPwShown(!isPwShown);
  };

  const isPw = type === "password";

  return (
    <div className={cn(styles.root, className)}>
      <input
        className={cn(styles.input, {
          [styles.inputWithBtn]: isPw,
        })}
        placeholder=" "
        type={isPwShown ? "text" : type}
        id={id}
      />
      <label className={styles.label} htmlFor={id} title={label}>
        {label}
      </label>
      {isPw && (
        <button className={styles.togglePw} onClick={togglePwShown}>
          <EyeIcon
            className={cn(styles.eyeIcon, {
              [styles.eyeIconActive]: isPwShown,
            })}
          />
        </button>
      )}
    </div>
  );
};

export default Input;
