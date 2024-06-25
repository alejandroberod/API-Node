import { Router } from "express";
import { createRole, showRole, showIdRole, updateRole, deleteRole } from "../controller/RoleController.js";
import userMiddleware from "../middlewares/user.middleware.js";
import roleScheme from "../schemes/role.scheme.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const roleRouter = Router();

roleRouter.post('/role', userMiddleware(roleScheme.createRole), createRole);
roleRouter.get('/role', verifyToken, showRole);
roleRouter.get('/role/:id', verifyToken, showIdRole);
roleRouter.put('/role/:id', verifyToken, userMiddleware(roleScheme.updateRole), updateRole);
roleRouter.delete('/role/:id', verifyToken, deleteRole);

export default roleRouter;