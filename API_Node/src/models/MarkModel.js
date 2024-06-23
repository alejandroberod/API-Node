import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";

class Mark extends Model{};

Mark.init({
    mark_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mark_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    },
    mark_description: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
}, {sequelize, modelName: "Mark"});

export default Mark;