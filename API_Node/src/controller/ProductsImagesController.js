import ProductsImages from "../models/ProductsImagesModel.js";

export const createProductImage = async (req, res) => {
    try {
        await ProductsImages.sync();
        const {productImage_url, productImage_type, product_FK} = req.body;
        const createProductImage = await ProductsImages.create({
            productImage_url, 
            productImage_type, 
            product_FK
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: "Product image created",
            id: createProductImage.	productImage_id
        });
        
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showProductImage = async (req, res) => {
    try {
        await ProductsImages.sync();
        const showProductImage = await ProductsImages.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show product image',
            body: showProductImage
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdProductImage = async (req, res) => {
    try {
        await ProductsImages.sync();
        const idProductImage = req.params.id;
        const showIdProductImage = await ProductsImages.findOne({
            where: {
                productImage_id: idProductImage
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show product image id',
            body: showIdProductImage
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updateProductImage = async (req, res) => {
    try {
        await ProductsImages.sync();
        const {productImage_url, productImage_type, product_FK} = req.body;
        const idProductImage = req.params.id;
        const updateProductImage = await ProductsImages.update({
            productImage_url, 
            productImage_type, 
            product_FK
        }, {
            where: {
              productImage_id: idProductImage
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Product image updated',
            body: updateProductImage
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deleteProductImage = async (req, res) => {
    try {
        await ProductsImages.sync();
        const idProductImage = req.params.id;
        const deleteProductImage = await ProductsImages.destroy({
            where: {
                productImage_id: idProductImage
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Product image',
            body: deleteProductImage
        });   
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}