"use client";

import { useState } from "react";

import { MainLayout } from "@/app/components/MainLayout";
import { Button, Input, TextArea } from "@/app/components/UIKit";

import { userMock as user } from "@/app/mocks";

import styles from "./EditProfile.module.scss";

const EditProfile: React.FC = () => {
  const [isAnyFieldTouched, setIsAnyFieldTouched] = useState(false);

  const handleChange = () => {
    setIsAnyFieldTouched(true);
  };

  const handleSaveData = () => {
    alert("Updated!");
  };

  return (
    <MainLayout recommendations={false}>
      <div className={styles.root}>
        <img className={styles.avatar} src={user.mediaUrl} alt={user.name} />
        <Input
          className={styles.input}
          defaultValue={user.name}
          label="Name"
          onChange={handleChange}
        />
        <Input
          className={styles.input}
          defaultValue={user.username}
          label="Nickname"
          onChange={handleChange}
        />
        <TextArea
          className={{ root: styles.input }}
          defaultValue={user.description}
          label="Bio"
          onChange={handleChange}
          rows={10}
        />
        <Button
          disabled={!isAnyFieldTouched}
          className={styles.saveBtn}
          onClick={handleSaveData}
        >
          Save changes
        </Button>
      </div>
    </MainLayout>
  );
};

export default EditProfile;
