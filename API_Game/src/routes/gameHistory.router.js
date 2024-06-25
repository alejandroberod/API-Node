import { Router } from "express";
import { createGameHistory, showGameHistory, showGameHistoryId, updateGameHistory, deleteGameHistory } from "../controller/GameHistoryController.js";
import userScheme from "../schemes/user.scheme.js";
import userMiddleware from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";


const gameHistoryRouter = Router();

gameHistoryRouter.post('/gameHistory', createGameHistory);
gameHistoryRouter.get('/gameHistory', showGameHistory);
gameHistoryRouter.get('/gameHistory/:id', showGameHistoryId);
// gameHistoryRouter.put('/gameHistory/:id', updateGameHistory);
// gameHistoryRouter.delete('/gameHistory/:id', deleteGameHistory);

export default gameHistoryRouter;