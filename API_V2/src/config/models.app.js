import sequelize from "./connect.db.js";
import UserStatus from "../models/UserStatusModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";

export const modelsApp = function initModels(select) {
    if(select) {
        UserStatus.hasMany(User, {
            foreignKey: {
                name: "userStatus_FK", 
                field: "userStatus_FK", 
                allowNull: true
            }
        });
        User.belongsTo(UserStatus, {
            foreignKey: {
                name: "userStatus_FK",
                field: "userStatus_FK", 
                allowNull: true
            },
            constraints: true
        });
        Role.hasMany(User, {
            foreignKey: {
                name: "role_FK",
                field: "role_FK",
                allowNull: true
            }
        });
        User.belongsTo(Role, {
            as: 'Current',
            foreignKey: {
                name: "role_FK",
                field: "role_FK", 
                allowNull: true
            },
            constraints: true
        });
        sequelize.sync();
    }
}