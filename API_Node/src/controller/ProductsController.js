import { where } from "sequelize";
import Products from "../models/ProductsModel.js";

export const createProduct = async (req, res) => {
    try {
        await Products.sync();
        const {product_name, product_description, product_price,product_quantity,mark_FK} = req.body;
        const createProduct = await Products.create({
            product_name, 
            product_description, 
            product_price,
            product_quantity,
            mark_FK            
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Product created',
            id: createProduct.product_id
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showProduct = async (req, res) => {
    try {
        await Products.sync();
        const showProduct = await Products.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'show Product',
            body: showProduct
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdProduct = async (req, res) => {
    try {
        await Products.sync();
        const idProduct = req.params.id;
        const showProductId = await Products.findOne({
            where: {
                product_id: idProduct
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show product id',
            body: showProductId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Products.sync();
        const {product_name, product_description, product_price,product_quantity,mark_FK} = req.body;
        const idProduct = req.params.id;
        const updateProduct = await Products.update({
            product_name, 
            product_description, 
            product_price,
            product_quantity,
            mark_FK    
        }, {
            where: {
                product_id: idProduct
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Product updated',
            body: updateProduct
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Products.sync();
        const idProduct = req.params.id;
        const deleteProduct = await Products.destroy({
            where: {
                product_id: idProduct
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Product',
            body: deleteProduct
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}