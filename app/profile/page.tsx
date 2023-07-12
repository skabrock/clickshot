"use client";

import { useState } from "react";
import Image from "next/image";
import cn from "clsx";

import { userMock as user, albumMock as posts } from "@/app/mocks";
import { MainLayout } from "@/app/components/MainLayout";
import ModulePost from "@/app/components/Post";
import { Post } from "../types";
import { useModal } from "../components/Modal";
import { FullPost } from "../components/FullPost";

import styles from "./Profile.module.scss";

const posts1 = posts.filter((_, i) => {
  return i % 3 === 0;
});

const posts2 = posts.filter((_, i) => {
  return i % 3 === 1;
});

const posts3 = posts.filter((_, i) => {
  return i % 3 === 2;
});

const MiniPost: React.FC<Post> = (post) => {
  const [showFullPost, hideFullPost] = useModal(() => (
    <FullPost
      hide={hideFullPost}
      photo={post.mediaUrl}
      comments={post.comments}
    />
  ));

  return (
    <button className={styles.post} onClick={showFullPost}>
      <img src={post.mediaUrl} className={styles.postImage} />
    </button>
  );
};

const Profile: React.FC = () => {
  const [view, setView] = useState<"mini" | "module">("mini");

  const isMini = view === "mini";
  const isModule = view === "module";

  return (
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
              <div className={styles.switchView}>
                <input
                  className={styles.viewRadio}
                  type="radio"
                  name="post-view"
                  id="post-view-miniatures"
                  checked={isMini}
                  onChange={() => setView("mini")}
                />
                <label
                  className={cn(styles.viewBtn, {
                    [styles.viewBtnActive]: isMini,
                  })}
                  htmlFor="post-view-miniatures"
                >
                  Miniatures
                </label>
                <input
                  className={styles.viewRadio}
                  type="radio"
                  name="post-view"
                  id="post-view-modules"
                  checked={isModule}
                  onChange={() => setView("module")}
                />
                <label
                  className={cn(styles.viewBtn, {
                    [styles.viewBtnActive]: isModule,
                  })}
                  htmlFor="post-view-modules"
                >
                  Modules
                </label>
              </div>
              <div className={styles.stats}>
                <div className={styles.statsBlock}>
                  <div className={styles.statsTitle}>Posts</div>
                  <div>{posts.length}</div>
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
          {isModule && (
            <div className={styles.modulesBody}>
              <div className={styles.moduleContainer}>
                {posts1.map((post) => (
                  <ModulePost
                    className={styles.modulePost}
                    key={post.id}
                    {...post}
                  />
                ))}
              </div>
              <div className={styles.moduleContainer}>
                {posts2.map((post) => (
                  <ModulePost
                    className={styles.modulePost}
                    key={post.id}
                    {...post}
                  />
                ))}
              </div>
              <div className={styles.moduleContainer}>
                {posts3.map((post) => (
                  <ModulePost
                    className={styles.modulePost}
                    key={post.id}
                    {...post}
                  />
                ))}
              </div>
            </div>
          )}
          {isMini && (
            <div className={styles.miniaturesBody}>
              {posts.length ? (
                <div className={styles.posts}>
                  {posts.map((post) => (
                    <MiniPost key={post.id} {...post} />
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
                  <h6 className={styles.placeholderTitle}>
                    Your album is empty
                  </h6>
                  <p className={styles.placeholderSubtitle}>
                    Add a photo to complete your profile
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
