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
      name: "alice90",
      avatar:
        "https://learnandsupport.getolympus.com/sites/default/files/styles/hero_large/public/2018-09/image2.jpg?itok=if8GyZts",
    },
    isLiked: false,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "khilen",
          image:
            "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg",
        },
        text: "wow! wow! wow! wow! wow! wow!wow! wow! wow! wow! wow!  wow! v wow! wow! v  wow!wow!wow! wow!",
        addDate: "2023-06-30 22:00:01",
      },
      {
        user: {
          id: "101",
          name: "sasha_",
          image:
            "https://nadiazheng.com/wp-content/uploads/2020/06/Montreal-actors-headshot-polo-shirt-dark-grey-background-by-nadia-zheng-800x1066.jpg",
        },
        text: "Great scene!",
        addDate: "2023-06-30 22:10:52",
      },
      {
        user: {
          id: "103",
          name: "nick97",
          image:
            "https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg?w=1000",
        },
        text: "Nice pic!",
        addDate: "2023-06-30 23:08:30",
      },
      {
        user: {
          id: "100",
          name: "khilen",
          image:
            "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg",
        },
        text: "wow! Beautiful!",
        addDate: "2023-07-01 22:00:01",
      },
      {
        user: {
          id: "101",
          name: "sasha21_",
          image:
            "https://nadiazheng.com/wp-content/uploads/2020/06/Montreal-actors-headshot-polo-shirt-dark-grey-background-by-nadia-zheng-800x1066.jpg",
        },
        text: "Great!",
        addDate: "2023-07-01 22:10:52",
      },
      {
        user: {
          id: "103",
          name: "nelst",
          image:
            "https://variety.com/wp-content/uploads/2022/12/Chadwick-1.jpg?w=1000",
        },
        text: "i like it",
        addDate: "2023-07-01 23:08:30",
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
          image:
            "https://i0.wp.com/photofocus.com/wp-content/uploads/2019/11/IMG_1192-2.jpg?fit=2560%2C1440&ssl=1",
        },
        text: "unusual image of iron man",
        addDate: "2023-06-08 12:01:00",
      },
      {
        user: {
          id: "201",
          name: "highbeam",
          image:
            "https://www.1854.photography/wp-content/uploads/2022/03/Sangsuk-Sylvia-Kang.png",
        },
        text: "interesting",
        addDate: "2023-06-08 12:11:00",
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
      name: "boby",
      avatar:
        "https://www.peerspace.com/resources/wp-content/uploads/best-vancouver-portrait-photographers.png",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "niks",
          image:
            "https://static1.squarespace.com/static/5521b031e4b06ebe90178744/t/5e573a59144ced2c2aa2ca93/1582774875961/blog-3.jpg?format=1500w",
        },
        text: "Irure labore sunt",
        addDate: "2023-06-10 12:00:37",
      },
      {
        user: {
          id: "101",
          name: "alice",
          image: "https://i.ytimg.com/vi/N2bhaD9tiWI/maxresdefault.jpg",
        },
        text: "wonderful",
        addDate: "2023-06-10 12:02:57",
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
      name: "viky",
      avatar:
        "https://images-pw.pixieset.com/elementfield/31745446/TheMorganFamily-6-7a643b07.jpg",
    },
    isLiked: true,
    isSaved: false,
    comments: [
      {
        user: {
          id: "100",
          name: "rose",
          image:
            "https://www.peerspace.com/resources/wp-content/uploads/woman-1602098_1280.jpg",
        },
        text: "wow!",
        addDate: "2023-06-09 16:13:20",
      },
      {
        user: {
          id: "101",
          name: "anastasiya",
          image:
            "https://m.media-amazon.com/images/M/MV5BMTBlNDQxYjktOTUwNy00MzkxLTgxMDctZDMwMDVlNjE4YjU3XkEyXkFqcGdeQXVyODYxMzY5MDM@._V1_.jpg",
        },
        text: "amazing!",
        addDate: "2023-06-10 16:13:20",
      },
    ],
  },
];
