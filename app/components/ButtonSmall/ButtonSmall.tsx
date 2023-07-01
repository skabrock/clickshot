import { Inter } from "next/font/google";
import { capitalized } from "@/app/utils";

import styles from "./ButtonSmall.module.scss";

const inter = Inter({ subsets: ["latin"] });

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonSmall: React.FC<ButtonProps> = () => {
  return <button className={styles.root}>Subscribe</button>;
};

export default ButtonSmall;
