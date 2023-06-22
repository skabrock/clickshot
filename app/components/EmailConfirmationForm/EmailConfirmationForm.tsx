import { Input } from "../UIKit/Input";
import { Button } from "../UIKit/Button";

import ClickshotLogo from "../../images/clickshot-logo.svg";

import styles from "./EmailConfirmationForm.module.scss";

const EmailConfirmationForm = () => {
  return (
    <div>
      <ClickshotLogo className={styles.clickShotLogo} />
    </div>
  );
};

export default EmailConfirmationForm;
