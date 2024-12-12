/* This is file contains api-mock-response to help you develop UI without real API side */

import webpackMockServer from "webpack-mock-server";
import { Game } from "@/types/game.types";
import apiEndpoints from "../api.endpoints";

const mockDataGames: Game[] = [
  {
    id: 1,
    name: "Overwatch",
    description: "Description for game 1",
    price: 23.99,
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/minecraft_xfzfix.jpg",
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
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/overwatch_yosx4o.jpg",
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
    image: "https://res.cloudinary.com/dryqravgn/image/upload/v1733950219/terraria_plvw5o.jpg",
    platforms: ["PC", "XBox One", "Playstation 5"],
    dateCreated: new Date("2011-5-19"),
    totalRating: 4.5,
    rating: "6+",
  },
];

const mockData = {
  id: 1,
  firstName: "Will",
  lastName: "Smith",
  email: "willsmith321@gmail.com",
};

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.testMock, (_req, res) => res.json(mockData));
  app.get(apiEndpoints.topProducts, (_req, res) => res.json(mockDataGames));
});
