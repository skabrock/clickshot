"use client";

import { useState } from "react";
import cn from "clsx";
import { formatDistanceToNow } from "date-fns";
import { Post } from "@/app/types";

import { useModal } from "../Modal/useModal";
import { Modal } from "../Modal";
import { FullPost } from "../FullPost";

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

  const [showFullPost, hideFullPost] = useModal(() => (
    <FullPost hide={hideFullPost} photo={mediaUrl} comments={comments} />
  ));

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
          <button className={styles.commentsButton} onClick={showFullPost}>
            <CommentsIcon />
          </button>
        </div>
      </div>
      <div className={styles.likeAmount}>Like: {likes}</div>
      <div className={styles.postDescription} title={description}>
        {description}
      </div>
      <div className={styles.footerOfPost}>
        <div>
          {comments.slice(0, 2).map((comment, i) => (
            <div className={styles.comment} key={i}>
              <a href="/" className={styles.commentatorUsername}>
                {comment.user.name}
              </a>
              <span className={styles.commentText}>{comment.text}</span>
            </div>
          ))}
        </div>
        <div className={styles.postCreatorInfo}>
          <div>
            <a href="/" className={styles.user}>
              {author.name}
            </a>
            <div className={styles.date}>
              {formatDistanceToNow(new Date(addDate))}
            </div>
          </div>
          <a className={styles.postCreatorAvatarLink} href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.postCreatorAvatar}
              src={author.avatar}
              alt="avatar"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostComponent;
