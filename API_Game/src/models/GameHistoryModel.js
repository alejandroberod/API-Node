import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import User from "./UserModel.js";

class GameHistory extends Model{};

GameHistory.init({
    gameHistory_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gameHistory_user1: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    gameHistory_user2: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    gameHistory_winner: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
}, {sequelize, modelName: "GameHistory"});

export default GameHistory;