import { Router } from "express";
import { createUserStatus, showUserStatus, showUserStatusId, updateUserStatus, deleteUserStatus } from "../controller/UserStatusController.js";

const userStatusRouter = Router();

userStatusRouter.post('/userStatus', createUserStatus);
userStatusRouter.get('/userStatus', showUserStatus);
userStatusRouter.get('/userStatus/:id', showUserStatusId);
userStatusRouter.put('/userStatus/:id', updateUserStatus);
userStatusRouter.delete('/userStatus/:id', deleteUserStatus);

export default userStatusRouter;