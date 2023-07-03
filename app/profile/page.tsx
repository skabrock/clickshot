import Image from "next/image";

import MainLayout from "@/app/components/MainLayout/MainLayout";
import { userMock as user, albumMock as posts } from "@/app/mocks";

import styles from "./Profile.module.scss";

const Profile: React.FC = () => (
  <MainLayout recommendations={false}>
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.avatar}
              src={user.mediaUrl}
              alt={user.username}
            />
          </div>
          <div>
            <p className={styles.username}>{user.username}</p>
            <p className={styles.description}>{user.description}</p>
          </div>
          <div className={styles.third}>
            <button className={styles.editBtn}>Edit Profile</button>
            <div className={styles.stats}>
              <div className={styles.statsBlock}>
                <div className={styles.statsTitle}>Posts</div>
                <div>{user.posts}</div>
              </div>
              <div className={styles.statsBlock}>
                <div className={styles.statsTitle}>Following</div>
                <div>{user.following}</div>
              </div>
              <div className={styles.statsBlock}>
                <div className={styles.statsTitle}>Followers</div>
                <div>{user.followers}</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.body}>
          {posts.length ? (
            <div className={styles.posts}>
              {posts.slice(0, 21).map((post) => (
                <button key={post.id} className={styles.post}>
                  <img src={post.mediaUrl} className={styles.postImage} />
                </button>
              ))}
              {Array(5)
                .fill("")
                .map(() => (
                  <div className={styles.postFiller} />
                ))}
            </div>
          ) : (
            <div className={styles.placeholder}>
              <Image
                className={styles.mobileImage}
                src="/empty-album-placeholder.png"
                alt="photo placeholder"
                width={167}
                height={167}
              />
              <h6 className={styles.placeholderTitle}>Your album is empty</h6>
              <p className={styles.placeholderSubtitle}>
                Add a photo to complete your profile
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  </MainLayout>
);

export default Profile;
