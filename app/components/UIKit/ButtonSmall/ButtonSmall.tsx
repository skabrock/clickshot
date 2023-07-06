import cn from "clsx";

import styles from "./ButtonSmall.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonSmall: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button className={cn(styles.root, className)} {...props}>
      {children}
    </button>
  );
};

export default ButtonSmall;
