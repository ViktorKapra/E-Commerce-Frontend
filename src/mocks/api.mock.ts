/* This is file contains api-mock-response to help you develop UI without real API side */

import webpackMockServer from "webpack-mock-server";
import { Game } from "@/types/game.types";
import UserInfo from "@/types/user.types";
import apiEndpoints from "../api.endpoints";

const mockDataGames: Game[] = [
  {
    id: 1,
    name: "Overwatch",
    description: "Description for game 1",
    price: 23.99,
    genre: "Shooter",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/overwatch_yosx4o.jpg",
    platforms: ["PC"],
    dateCreated: new Date("2016-5-24"),
    totalRating: 5,
    rating: "6+",
  },
  {
    id: 2,
    name: "MineCraft",
    description: "Description for game 2",
    price: 25.99,
    genre: "Survival",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/minecraft_xfzfix.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2009-5-19"),
    totalRating: 4.5,
    rating: "6+",
  },
  {
    id: 3,
    name: "Terraria",
    description: "Description for game 2",
    price: 5.99,
    genre: "Survival",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/terraria_plvw5o.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2011-5-19"),
    totalRating: 4.5,
    rating: "6+",
  },
  {
    id: 4,
    name: "Sims 4",
    description: "Description for game 4",
    price: 15.99,
    genre: "Arcade",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1736690280/sims4_bclpqi.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2014-5-19"),
    totalRating: 4.5,
    rating: "12+",
  },
  {
    id: 5,
    name: "Counter Strike",
    description: "Description for game 5",
    price: 3.99,
    genre: "Shooter",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1736690266/cs_fnzcvs.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2018-5-19"),
    totalRating: 4.5,
    rating: "12+",
  },
  {
    id: 6,
    name: "Battlefield 1",
    description: "Description for game 6",
    price: 8.99,
    genre: "Shooter",
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1736690260/battlefield1_et2vsb.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2018-5-19"),
    totalRating: 4.5,
    rating: "18+",
  },
];

const mockData = {
  id: 1,
  firstName: "Will",
  lastName: "Smith",
  email: "willsmith321@gmail.com",
};

const mockUserData: UserInfo = {
  username: "Will",
  addressDelivery: "New York",
  phoneNumber: "+123456789000",
  profilePicture: "https://res.cloudinary.com/dryqravgn/image/upload/v1736173943/noPhoto_zwwckv.jpg",
};

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.testMock, (_req, res) => res.json(mockData));
  // Products API
  app.get(apiEndpoints.topProducts, (_req, res) => res.json(mockDataGames));
  app.get(`${apiEndpoints.searchProducts}:text`, (req, res) => {
    const { text } = req.params;
    if (!text.includes("/")) {
      const matchedGames = mockDataGames.filter((game) => game.name.toLowerCase().includes(text.toLowerCase()));
      return res.json(matchedGames.slice(0, 5));
    }
    return res.status(400).send("Invalid search text");
  });
  app.get(`${apiEndpoints.listProducts}`, (req, res) => {
    const { genre = "all", age = "all", criteria = "name", type = "asc", offset = "0", limit = "10" } = req.query;
    const matchedGames = mockDataGames
      .filter(
        (game) =>
          (genre === "all" || game.genre.toLowerCase().includes(genre.toString().toLowerCase())) &&
          (age === "all" || game.rating.toLowerCase().includes(age.toString().toLowerCase())),
      )
      .sort((a, b) => {
        if (type === "asc") {
          return a[criteria as keyof Game] > b[criteria as keyof Game] ? 1 : -1;
        }
        return a[criteria as keyof Game] < b[criteria as keyof Game] ? 1 : -1;
      })
      .slice(+offset, +offset + +limit);
    return res.json(matchedGames);
  });

  // User API
  app.post(apiEndpoints.signIn, (_req, res) => {
    console.log(_req.body);
    return res.status(204).json();
  });
  app.post(apiEndpoints.signUp, (_req, res) => {
    console.log(_req.body);
    return res.status(204).json();
  });
  app.patch(apiEndpoints.changePassword, (_req, res) => {
    console.log(_req.body);
    return res.status(200).json();
  });
  app.get(apiEndpoints.getUserInfo, (_req, res) => res.json(mockUserData));
  app.post(apiEndpoints.saveProfile, (_req, res) => {
    return res.status(204).json();
  });
});
