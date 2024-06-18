import { Router } from "express";
import { createRole, showRole, showIdRole, updateRole, deleteRole } from "../controller/RoleController.js";

const roleRouter = Router();

roleRouter.post('/role', createRole);
roleRouter.get('/role', showRole);
roleRouter.get('/role/:id', showIdRole);
roleRouter.put('/role/:id', updateRole);
roleRouter.delete('/role/:id', deleteRole);

export default roleRouter;