import { Router } from "express";
import { createGame, showGame, showGameId, joinGame } from "../controller/GameController.js";
import userScheme from "../schemes/user.scheme.js";
import userMiddleware from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";


const gameRouter = Router();

gameRouter.post('/game', createGame);
gameRouter.get('/game', showGame);
gameRouter.get('/game/:id', showGameId);
gameRouter.put('/game/:id', joinGame);
// gameRouter.delete('/game/:id', deleteGame);

export default gameRouter;