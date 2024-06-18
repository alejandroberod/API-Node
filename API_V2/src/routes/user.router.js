import { Router } from "express";
import { createUser, showUser, showUserId, updateUser, deleteUser, createUserFK } from "../controller/UserController.js";

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.post('/userFK', createUserFK);
userRouter.get('/userFK', showUser);
userRouter.get('/user/:id', showUserId);
userRouter.put('/user/:id', updateUser);
userRouter.delete('/user/:id', deleteUser);


export default userRouter;