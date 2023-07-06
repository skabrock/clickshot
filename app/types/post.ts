export interface Comment {
  user: {
    id: string;
    name: string;
    image: string;
  };
  text: string;
  addDate: string;
}

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
  comments: Comment[];
}
