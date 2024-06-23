import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import Products from "./ProductsModel.js";

class ProductsImages extends Model{};

ProductsImages.init({
    productImage_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    productImage_image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    productImage_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_FK: {
        type: DataTypes.INTEGER,
        references: {
            model: Products,
            key: 'id'
        }
    }
}, {sequelize, modelName: "ProductsImages"});

export default ProductsImages;