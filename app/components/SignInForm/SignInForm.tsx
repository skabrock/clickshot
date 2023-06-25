import { Input } from "../UIKit/Input";
import { Button } from "../UIKit/Button";

import ClickshotLogo from "../../images/clickshot-logo.svg";

import styles from "./SignIn.module.scss";

const SignInForm = () => {
  return (
    <div className={styles.root}>
      <ClickshotLogo className={styles.clickShotLogo} />
      <Input className={styles.textInput} id="email" label="Enter your email" />
      <Input id="create-password" label="Create password" type="password" />
      <div className={styles.forgotPass}>Forgot password?</div>
      <Button className={styles.inputButtonLogIn}>LOG IN</Button>
      <div className={styles.rememberMe}>
        <input
          className={styles.checBoxInput}
          type="checkbox"
          id="remember-me"
        />
        <label className={styles.rememberMeCheckBoxUi} htmlFor="remember-me" />
        <label className={styles.rememberMeCheckBoxLabel} htmlFor="remember-me">
          Remember me
        </label>
      </div>
      <div className={styles.dontHaveAnAccaunt}>
        Don&apos;t have an account?
        <a className={styles.signIn} href="/">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default SignInForm;
