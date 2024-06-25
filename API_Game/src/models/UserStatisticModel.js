import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import User from "./UserModel.js";

class UserStatistic extends Model{};

UserStatistic.init({
    UserStatistic_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    UserStatistic_wins: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    }, 
    UserStatistic_lost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserStatistic_draw: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserStatistic_games: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_FK: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        },
        unique: true
    }
}, {sequelize, modelName: "UserStatistic"});

export default UserStatistic;