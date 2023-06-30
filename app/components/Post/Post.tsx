"use client";

import cn from "clsx";
import { Post } from "@/app/types";

import { useState } from "react";

import SaveIcon from "@/app/images/icons/save-icon.svg";
import SendToIcon from "@/app/images/icons/send-to-icon.svg";
import LikeIcon from "@/app/images/icons/liked-icon.svg";
import UnlikedIcon from "@/app/images/icons/unliked.svg";
import CommentsIcon from "@/app/images/icons/comments.svg";

import styles from "./Post.module.scss";

interface PostProps extends Post {
  className?: string;
}

const PostComponent: React.FC<PostProps> = ({
  className,
  mediaUrl,
  likes,
  description,
}) => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isPostSaved, setIsPostsaved] = useState(false);

  const togglePostLiked = () => {
    setIsPostLiked(!isPostLiked);
  };

  const togglePostSaved = () => {
    setIsPostsaved(!isPostSaved);
  };

  return (
    <div className={cn(styles.root, className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.pic} src={mediaUrl} alt="post" />
      <div className={styles.actionPanel}>
        <div className={styles.iconGroup}>
          <button className={styles.saveButton} onClick={togglePostSaved}>
            {isPostSaved ? <div>save</div> : <SaveIcon />}
          </button>
          <button className={styles.sendToButton}>
            <SendToIcon />
          </button>
        </div>
        <div className={styles.iconGroup}>
          <button className={styles.likeButton} onClick={togglePostLiked}>
            {isPostLiked ? <LikeIcon /> : <UnlikedIcon />}
          </button>
          <button className={styles.commentsButton}>
            <CommentsIcon />
          </button>
        </div>
      </div>
      <div className={styles.likeAmount}>Like: {likes}</div>
      <div className={styles.postDescription}>{description}</div>
      <div className={styles.comments}>Coments</div>
    </div>
  );
};

export default PostComponent;
