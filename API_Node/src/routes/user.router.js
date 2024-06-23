import { Router } from "express";
import { createUser, showUser, showUserId, updateUser, deleteUser, createUserFK, loginUser } from "../controller/UserController.js";
import userScheme from "../schemes/user.scheme.js";
import userMiddleware from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";


const userRouter = Router();

userRouter.post('/user', userMiddleware(userScheme.createUser), createUser);
userRouter.post('/user/login', loginUser);
userRouter.get('/user', verifyToken, showUser);
userRouter.get('/user/:id', verifyToken, showUserId);
userRouter.put('/user/:id', verifyToken, userMiddleware(userScheme.createUser), updateUser);
userRouter.delete('/user/:id', verifyToken, deleteUser);


export default userRouter;