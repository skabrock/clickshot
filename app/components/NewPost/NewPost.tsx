import { Modal } from "../Modal";

interface NewPostProps {
  hide: () => void;
}

const NewPost: React.FC<NewPostProps> = ({ hide }) => (
  <Modal hide={hide}>New Post</Modal>
);

export default NewPost;
