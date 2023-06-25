import { Input } from "../UIKit/Input";
import { Button } from "../UIKit/Button";

import Image from "next/image";

import styles from "./EmailConfirmationForm.module.scss";

type EmailConfirmationFormProps = {
  onNextStep: () => void;
};

const EmailConfirmationForm: React.FC<EmailConfirmationFormProps> = ({
  onNextStep,
}) => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.iconImage}
        src="/confirmation-code.png"
        alt="Confirmation Code Icon"
        width={180}
        height={180}
      />
      <div className={styles.enterACodeText}>Enter a code</div>
      <div className={styles.text}>
        Enter the verification code sent to your email
      </div>
      <Input className={styles.inputCode} id="code" label="Code" />
      <Button className={styles.inputButtonNext} onClick={onNextStep}>
        NEXT
      </Button>
      <Button className={styles.inputButtonGhost} variant="ghost">
        I didn&apos;t receive the code
      </Button>
    </div>
  );
};

export default EmailConfirmationForm;
