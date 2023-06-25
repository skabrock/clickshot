"use client";

import { useState } from "react";
import cn from "clsx";

import styles from "./Input.module.scss";

import EyeIcon from "../../../images/eye-icon.svg";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "date" | "email" | "password";
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type = "text",
  label,
  className,
  error,
  ...other
}) => {
  const [isPwShown, setIsPwShown] = useState(false);

  const togglePwShown = () => {
    setIsPwShown(!isPwShown);
  };

  const isPw = type === "password";
  const isError = error !== undefined;

  return (
    <div
      className={cn(styles.root, className, { [styles.rootError]: isError })}
    >
      <input
        className={cn(styles.input, {
          [styles.inputWithBtn]: isPw,
          [styles.inputError]: isError,
        })}
        placeholder=" "
        type={isPwShown ? "text" : type}
        id={id}
        {...other}
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
      {isError && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

export default Input;
