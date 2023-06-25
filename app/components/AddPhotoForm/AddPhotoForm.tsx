import { Button } from "../UIKit/Button";

import Image from "next/image";

import styles from "./AddPhotoForm.module.scss";

const AddPhotoForm = () => {
  return (
    <div className={styles.root}>
      <Image
        className={styles.iconImage}
        src="/photo-icon.png"
        alt="Photo Icon"
        width={132}
        height={137}
      />
      <div className={styles.addProfilePhoto}>Add profile photo</div>
      <div className={styles.text}>
        Add profile photo to your friends able to know you, or add late
      </div>
      <Button className={styles.inputButtonAddPhoto}>ADD PHOTO</Button>
      <Button className={styles.inputButtonSkip} variant="ghost">
        Skip
      </Button>
    </div>
  );
};

export default AddPhotoForm;
