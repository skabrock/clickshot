import { Post } from "@/app/types";

export const postsMock: Post[] = [
  {
    id: "1",
    likes: "275",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg",
    addDate: "2023-06-09 14:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar: "https://some.avatar.link/image.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        comment: "wow!",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        comment: "Great scene!",
      },
    ],
  },
  {
    id: "2",
    likes: "521",
    description: "Iron Man from the MCU in the style of a samurai",
    mediaUrl:
      "https://media.istockphoto.com/id/626545182/photo/toronto-skyline-with-purple-light-toronto-ontario-canada.jpg?s=612x612&w=0&k=20&c=gTfPgxMvsUZaz7YS3EF2voErqf2MmQRpwlHnO1jVBBc=",
    addDate: "2023-06-08 12:00:00",
    author: {
      id: "103",
      name: "art.jam101",
      avatar: "https://some.avatar.link/image.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "200",
          name: "weirdo",
        },
        comment: "unusual image of iron man",
      },
      {
        user: {
          id: "201",
          name: "highbeam",
        },
        comment: "interesting",
      },
    ],
  },
  {
    id: "1",
    likes: "275",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg",
    addDate: "2023-06-09 14:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar: "https://some.avatar.link/image.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        comment: "wow!",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        comment: "Great scene!",
      },
    ],
  },
  {
    id: "1",
    likes: "275",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg",
    addDate: "2023-06-09 14:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar: "https://some.avatar.link/image.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        comment: "wow!",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        comment: "Great scene!",
      },
    ],
  },
];
