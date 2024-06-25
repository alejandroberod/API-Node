import sequelize from "./connect.db.js";
import UserStatus from "../models/UserStatusModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";
import UserStatistic from "../models/UserStatisticModel.js";
import Game from "../models/GameModel.js";
import GameHistory from "../models/GameHistoryModel.js";

export const modelsApp = function initModels(select) {
    if(select) {
        UserStatus.hasMany(User, {
            foreignKey: "userStatus_FK",
            allowNull: true
        });
        User.belongsTo(UserStatus, {
            foreignKey: "userStatus_FK",
            allowNull: true
        });
        
        Role.hasMany(User, {
            foreignKey: "role_FK",
            allowNull: true
        });
        User.belongsTo(Role, {
            foreignKey: "role_FK",
            allowNull: true
        });

        User.hasMany(UserStatistic, {
            foreignKey: "user_FK",
            allowNull: true
        });
        UserStatistic.belongsTo(User, {
            foreignKey: "user_FK",
            allowNull: true
        });

        User.hasMany(Game, {
            foreignKey: "game_user1",
            allowNull: true
        });
        Game.belongsTo(User, {
            as: 'User1',
            foreignKey: "game_user1",
            allowNull: true
        });

        User.hasMany(Game, {
            foreignKey: "game_user2",
            allowNull: true
        });
        Game.belongsTo(User, {
            as: 'User2',
            foreignKey: "game_user2",
            allowNull: true
        });

        User.hasMany(Game, {
            foreignKey: "game_winner",
            allowNull: true
        });
        Game.belongsTo(User, {
            as: 'Winner',
            foreignKey: "game_winner",
            allowNull: true
        });

        User.hasMany(GameHistory, {
            foreignKey: "gameHistory_user1",
            allowNull: true
        });
        GameHistory.belongsTo(User, {
            as: 'HistoryUser1',
            foreignKey: "gameHistory_user1",
            allowNull: true
        });

        User.hasMany(GameHistory, {
            foreignKey: "gameHistory_user2",
            allowNull: true
        });
        GameHistory.belongsTo(User, {
            as: 'HistoryUser2',
            foreignKey: "gameHistory_user2",
            allowNull: true
        });

        User.hasMany(GameHistory, {
            foreignKey: "gameHistory_winner",
            allowNull: true
        });
        GameHistory.belongsTo(User, {
            as: 'HistoryWinner',
            foreignKey: "gameHistory_winner",
            allowNull: true
        });

        sequelize.sync();
    }
}
