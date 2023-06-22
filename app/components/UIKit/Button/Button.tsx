import styles from "./Button.module.scss";

type ButtonProps = {
  children: string;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button className={styles.root}>{children}</button>;
};

export default Button;
