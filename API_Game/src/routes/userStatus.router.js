import { Router } from "express";
import { createUserStatus, showUserStatus, showUserStatusId, updateUserStatus, deleteUserStatus } from "../controller/UserStatusController.js";
import userMiddleware from "../middlewares/user.middleware.js";
import userStatusScheme from "../schemes/userStatus.scheme.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const userStatusRouter = Router();

userStatusRouter.post('/userStatus', userMiddleware(userStatusScheme.createUserStatus), createUserStatus);
userStatusRouter.get('/userStatus', verifyToken, showUserStatus);
userStatusRouter.get('/userStatus/:id', verifyToken, showUserStatusId);
userStatusRouter.put('/userStatus/:id', verifyToken, userMiddleware(userStatusScheme.updateUserStatus), updateUserStatus);
userStatusRouter.delete('/userStatus/:id', verifyToken, deleteUserStatus);

export default userStatusRouter;