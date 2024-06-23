import { Router } from "express";
import { createProductImage, showProductImage, showIdProductImage, updateProductImage, deleteProductImage } from "../controller/ProductsImagesController.js";
import userMiddleware from "../middlewares/user.middleware.js";
import productImageScheme from "../schemes/productImage.scheme.js";
import { verifyToken } from "../middlewares/jwt.middleware.js";

const productImageRouter = Router();

productImageRouter.post('/productImage', verifyToken, userMiddleware(productImageScheme.createProductImage), createProductImage);
productImageRouter.get('/productImage', verifyToken, showProductImage);
productImageRouter.get('/productImage/:id', verifyToken, showIdProductImage);
productImageRouter.put('/productImage/:id', verifyToken, userMiddleware(productImageScheme.updateProductImage), updateProductImage);
productImageRouter.delete('/productImage/:id', verifyToken, deleteProductImage);

export default productImageRouter;