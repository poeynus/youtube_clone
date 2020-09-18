import express from "express";
import { login, logout } from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, search);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;
