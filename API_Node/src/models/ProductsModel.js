import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import Mark from "./MarkModel.js";

class Products extends Model{};

Products.init({
    product_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    product_description: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    product_price: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    product_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    mark_FK: {
        type: DataTypes.INTEGER,
        references: {
            model: Mark,
            key: 'id'
        }
    }
}, {sequelize, modelName: "Products"});

export default Products;