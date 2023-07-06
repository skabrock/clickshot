import { useState } from "react";
import Image from "next/image";

import { Modal } from "../Modal";
import { Button, TextArea, ButtonSmall } from "../UIKit";

import styles from "./NewPost.module.scss";

interface NewPostProps {
  hide: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ hide }) => {
  const [uploadImg, setUploadImg] = useState<null | string>(null);

  const resetUploadImg = () => {
    setUploadImg(null);
  };

  const handleAddPost = () => {
    // handle add post here

    hide();
  };

  const handleUpload: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const file = event.target?.files?.[0];

    if (!file) return;

    const FR = new FileReader();

    FR.onloadend = function () {
      setUploadImg(String(FR.result));
    };

    FR.readAsDataURL(file);
  };

  return (
    <Modal
      hide={hide}
      modalClassName={styles.modal}
      containerClassName={styles.modalContainer}
    >
      <input
        type="file"
        name="new-post"
        id="upload-file"
        hidden
        onChange={handleUpload}
        accept="image/png, image/jpeg, image/webp"
      />
      {uploadImg?.length ? (
        <div className={styles.uploadedImgContainer}>
          <img
            className={styles.uploadedImg}
            src={uploadImg}
            alt="uploaded image"
          />
          <ButtonSmall
            className={styles.resetUploaded}
            onClick={resetUploadImg}
          >
            reset
          </ButtonSmall>
        </div>
      ) : (
        <label htmlFor="upload-file" className={styles.uploadFileLabel}>
          <Image
            src="/addPost.png"
            alt="Add photo"
            width={180}
            height={180}
            className={styles.addPostIcon}
          />
          <span className={styles.selectPhotoText}>Select photo</span>
        </label>
      )}

      <TextArea
        label={"Add description"}
        name="post-description"
        className={{
          root: styles.description,
          input: styles.descriptionInput,
          label: styles.label,
        }}
      />
      <div className={styles.buttons}>
        <Button variant="ghost" onClick={hide}>
          Close
        </Button>
        <Button variant="default" onClick={handleAddPost}>
          Add Post
        </Button>
      </div>
    </Modal>
  );
};

export default NewPost;
