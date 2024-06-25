import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import User from "./UserModel.js";

class Game extends Model{};

Game.init({
    game_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    game_user1: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    game_user2: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    game_winner: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'user_id'
        }
    },
}, {sequelize, modelName: "Game"});

export default Game;