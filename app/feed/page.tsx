import type { ReactElement } from "react";

import { postsMock } from "@/app/mocks";
import Post from "@/app/components/Post";
import MainLayout from "@/app/components/MainLayout/MainLayout";

import styles from "./Feed.module.scss";

const Feed = () => {
  return (
    <MainLayout>
      <main className={styles.root}>
        {postsMock.map((post) => (
          <Post key={post.id} className={styles.post} {...post} />
        ))}
      </main>
    </MainLayout>
  );
};

export default Feed;
