import Link from "next/link";
import { format } from "date-fns";

import { Modal } from "../Modal";
import { Comment } from "@/app/types";
import { userMock } from "@/app/mocks";

import SendMessageIcon from "@/app/images/icons/send-message.svg";

import styles from "./FullPost.module.scss";

interface FullPostProps {
  photo: string;
  comments: Comment[];
  hide: () => void;
}

const FullPost: React.FC<FullPostProps> = ({ hide, photo, comments }) => {
  return (
    <Modal
      hide={hide}
      containerClassName={styles.modalContainer}
      modalClassName={styles.modal}
    >
      <div className={styles.root}>
        <div>
          <img className={styles.image} src={photo} alt="Image" />
        </div>
        <div className={styles.commentsBlock}>
          <div className={styles.commentsHeader}>
            <p>Comments</p>
            <button className={styles.closeBtn} onClick={hide}>
              ✕
            </button>
          </div>
          <div className={styles.commentsContainer}>
            {comments.map((comment) => (
              <div className={styles.comment} key={comment.text}>
                <img
                  className={styles.avatar}
                  src={comment.user.image}
                  alt="user image"
                />
                <div className={styles.commentBody}>
                  <p className={styles.commentUsername}>{comment.user.name}</p>
                  <p className={styles.commentText}>{comment.text}</p>
                  <p className={styles.commentDate}>
                    {format(new Date(comment.addDate), "dd.MM.yy HH:mm")}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.addCommentBlock}>
            <Link href="/profile" onClick={hide}>
              <img
                className={styles.userImage}
                src={userMock.mediaUrl}
                alt="user image"
              />
            </Link>
            <input
              className={styles.userInput}
              type="text"
              placeholder="Add comment..."
            />
            <button className={styles.addCommentBtn}>
              <SendMessageIcon />
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default FullPost;
