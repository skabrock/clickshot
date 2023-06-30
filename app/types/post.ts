export interface Post {
  id: string;
  likes: string;
  description: string;
  mediaUrl: string;
  addDate: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  isLiked: boolean;
  isSaved: boolean;
  comments: {
    user: {
      id: string;
      name: string;
    };
    comment: string;
  }[];
}
