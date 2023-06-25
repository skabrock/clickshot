import { Input } from "../UIKit/Input";
import { Button } from "../UIKit/Button";

import ClickshotLogo from "../../images/clickshot-logo.svg";

import styles from "./SignUp.module.scss";

type SignUpFormProps = {
  onNextStep: () => void;
};

const SignUpForm: React.FC<SignUpFormProps> = ({ onNextStep }) => {
  return (
    <div className={styles.root}>
      <ClickshotLogo className={styles.clickShotLogo} />
      <Input className={styles.input} id="email" label="Enter your email" />
      <Input
        className={styles.input}
        id="create-nickname"
        label="Create nickname"
      />
      <Input
        className={styles.input}
        id="create-password"
        label="Create password"
        type="password"
      />
      <Input
        className={styles.input}
        id="repeat-password"
        label="Repeat password"
        type="password"
        error="Wrong password"
      />
      <Input
        className={styles.input}
        id="add-your-birthday"
        label="Add your birthday"
      />
      <Button className={styles.button} onClick={onNextStep}>
        SIGN UP
      </Button>
      <div className={styles.haveAnAccount}>
        Have an account?
        <a className={styles.login} href="/">
          Log In
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
