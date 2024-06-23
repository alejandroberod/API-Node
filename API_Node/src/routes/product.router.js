import { Router } from "express";
import { createProduct, showProduct, showIdProduct, updateProduct, deleteProduct } from "../controller/ProductsController.js";
import userMiddleware from "../middlewares/user.middleware.js";
import productScheme from "../schemes/product.scheme.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const productRouter = Router();

productRouter.post('/product', verifyToken, userMiddleware(productScheme.createProduct), createProduct);
productRouter.get('/product', verifyToken, showProduct);
productRouter.get('/product/:id', verifyToken, showIdProduct);
productRouter.put('/product/:id', verifyToken, userMiddleware(productScheme.updateProduct), updateProduct);
productRouter.delete('/product/:id', verifyToken, deleteProduct);

export default productRouter;