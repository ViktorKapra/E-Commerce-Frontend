/* This is file contains api-mock-response to help you develop UI without real API side */

import webpackMockServer from "webpack-mock-server";
import apiEndpoints from "../api.endpoints";

const mockData = {
  id: 1,
  firstName: "Will",
  lastName: "Smith",
  email: "willsmith321@gmail.com",
};

const mockTopProducts = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default webpackMockServer.add((app) => {
  app.get(apiEndpoints.testMock, (_req, res) => res.json(mockData));
  app.get(apiEndpoints.topProducts, (_req, res) => res.json(mockTopProducts));
});
