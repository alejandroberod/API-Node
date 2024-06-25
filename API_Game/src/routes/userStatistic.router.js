import { Router } from "express";
import { createUserStatistic, showUserStatistic, showUserStatisticId, updateUserStatistic } from "../controller/UserStatisticController.js";
import userScheme from "../schemes/user.scheme.js";
import userMiddleware from "../middlewares/user.middleware.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";


const userStatisticRouter = Router();

userStatisticRouter.post('/userStatistic', createUserStatistic);
userStatisticRouter.get('/userStatistic', showUserStatistic);
userStatisticRouter.get('/userStatistic/:id', showUserStatisticId);
userStatisticRouter.put('/userStatistic/:id', updateUserStatistic);
// userStatisticRouter.delete('/userStatistic/:id', deleteUserStatistic);

export default userStatisticRouter;