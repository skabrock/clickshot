import cn from "clsx";

import styles from "./TextArea.module.scss";

interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className"> {
  label?: string;
  className?: {
    root?: string;
    input?: string;
    label?: string;
  };
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  className,
  children,
  ...other
}) => (
  <div className={cn(styles.root, className?.root)}>
    <textarea
      id={id}
      placeholder=" "
      className={cn(
        styles.input,

        className?.input
      )}
      {...other}
    >
      {children}
    </textarea>
    <label
      className={cn(styles.label, className?.label)}
      htmlFor={id}
      title={label}
    >
      {label}
    </label>
  </div>
);

export default TextArea;
