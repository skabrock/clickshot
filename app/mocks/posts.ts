import { Post } from "@/app/types";

export const postsMock: Post[] = [
  {
    id: "1",
    likes: "275",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl:
      "https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-simon-berger-1266810.jpg&fm=jpg",
    addDate: "2023-06-30 21:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar:
        "https://learnandsupport.getolympus.com/sites/default/files/styles/hero_large/public/2018-09/image2.jpg?itok=if8GyZts",
    },
    isLiked: false,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        text: "wow! wow! wow! wow! wow! wow!wow! wow! wow! wow! wow!  wow! v wow! wow! v  wow!wow!wow! wow!",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        text: "Great scene!",
      },
      {
        user: {
          id: "103",
          name: "test",
        },
        text: "Third comment",
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
      avatar:
        "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?fit=5184%2C3456&ssl=1",
    },
    isLiked: false,
    isSaved: true,
    comments: [
      {
        user: {
          id: "200",
          name: "weirdo",
        },
        text: "unusual image of iron man",
      },
      {
        user: {
          id: "201",
          name: "highbeam",
        },
        text: "interesting",
      },
    ],
  },
  {
    id: "3",
    likes: "25",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl:
      "https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg",
    addDate: "2023-06-09 14:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar:
        "https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        text: "Irure labore sunt",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        text: "Great scene!",
      },
    ],
  },
  {
    id: "4",
    likes: "93",
    description:
      "I was so inspired by Stray - game about cat's adventures that I decided to make Consequat minim magna aute ad adipisicing magna sit deserunt consequat. Ex officia exercitation incididunt ad laborum minim nisi eu.",
    mediaUrl: "https://www.pexels.com/photo/45853/download/",
    addDate: "2023-06-09 14:53:17",
    author: {
      id: "103",
      name: "alicebob",
      avatar:
        "https://images-pw.pixieset.com/elementfield/31745446/TheMorganFamily-6-7a643b07.jpg",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "alicebob2",
        },
        text: "wow!",
      },
      {
        user: {
          id: "101",
          name: "alicebob3",
        },
        text: "Great scene!",
      },
    ],
  },
];
