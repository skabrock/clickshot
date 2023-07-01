"use client";

import cn from "clsx";
import { formatDistanceToNow } from "date-fns";
import { Post } from "@/app/types";

import { useState } from "react";

import SaveIcon from "@/app/images/icons/save-icon.svg";
import SaveIconBlack from "@/app/images/icons/save-icon-black.svg";
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
  author,
  comments,
  addDate,
  isLiked,
  isSaved,
}) => {
  const [isPostLiked, setIsPostLiked] = useState(isLiked);
  const [isPostSaved, setIsPostsaved] = useState(isSaved);

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
            {isPostSaved ? (
              <SaveIconBlack className={styles.savedIconBlack} />
            ) : (
              <SaveIcon />
            )}
          </button>
          <button className={styles.sendToButton}>
            <SendToIcon />
          </button>
        </div>
        <div className={styles.iconGroup}>
          <button
            className={cn(styles.likeButton, {
              [styles.likeButtonActive]: isPostLiked,
            })}
            onClick={togglePostLiked}
          >
            {isPostLiked ? <LikeIcon /> : <UnlikedIcon />}
          </button>
          <button className={styles.commentsButton}>
            <CommentsIcon />
          </button>
        </div>
      </div>
      <div className={styles.likeAmount}>Like: {likes}</div>
      <div className={styles.postDescription}>{description}</div>
      <div className={styles.footerOfPost}>
        <div className={styles.comments}>
          {comments.slice(0, 2).map((comment, i) => (
            <div key={i}>
              <span className={styles.commentatorUsername}>
                {comment.user.name}
              </span>
              <span className={styles.commentText}>{comment.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.postCreatorInfo}>
          <div className={styles.rightInfoBlock}>
            <div className={styles.user}>{author.name}</div>
            <div className={styles.date}>
              {formatDistanceToNow(new Date(addDate))}
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={styles.postCreatorAvatar}
            src={author.avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
