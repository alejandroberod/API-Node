import { Router } from "express";
import { createMark, showMark, showIdMark, updateMark, deleteMark } from "../controller/MarkController.js";
import markScheme from "../schemes/mark.scheme.js";
import userMiddleware from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const markRouter = Router();

markRouter.post('/mark', verifyToken, userMiddleware(markScheme.createMark), createMark);
markRouter.get('/mark', verifyToken, showMark);
markRouter.get('/mark/:id', verifyToken, showIdMark);
markRouter.put('/mark/:id', verifyToken, userMiddleware(markScheme.updateMark), updateMark);
markRouter.delete('/mark/:id', verifyToken, deleteMark);

export default markRouter;