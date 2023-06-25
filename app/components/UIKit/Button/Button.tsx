import cn from "clsx";

import { Inter } from "next/font/google";
import { capitalized } from "@/app/utils";

import styles from "./Button.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "default",
  ...rest
}) => {
  return (
    <button
      className={cn(
        inter.className,
        styles.root,
        className,
        styles[`variant${capitalized(variant)}`]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
