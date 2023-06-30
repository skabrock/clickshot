import styles from "./Feed.module.scss";

import { postsMock } from "@/app/mocks";

import Post from "../components/Post";

export default function Home() {
  return (
    <main className={styles.root}>
      {postsMock.map((post) => (
        <Post key={post.id} className={styles.post} {...post} />
      ))}
    </main>
  );
}
