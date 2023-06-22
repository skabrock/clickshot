import { Input } from "../UIKit/Input";
import { Button } from "../UIKit/Button";

import ClickshotLogo from "../../images/clickshot-logo.svg";

import styles from "./SignUp.module.scss";

//import styles from "../UIKit/Input";
//import styles from "../UIKit/Button";

const SignUpForm = () => {
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
      />
      <Input
        className={styles.input}
        id="add-your-birthday"
        label="Add your birthday"
      />
      <Button>SIGN UP</Button>
      <div className={styles.haveAnAccount}>
        Have an account?
        <a className={styles.login} href="/">
          {" "}
          Log In
        </a>
      </div>
    </div>
  );
};

export default SignUpForm;
