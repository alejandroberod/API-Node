import sequelize from "../config/connect.db.js";
import { Model, DataTypes } from "sequelize";
import UserStatus from "./UserStatusModel.js";
import Role from "./RoleModel.js";

class User extends Model{};

User.init({
    user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    user_user: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    }, 
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userStatus_FK: {
        type: DataTypes.INTEGER,
        references: {
            model: UserStatus,
            key: 'userStatus_id'
        }
    },
    role_FK: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'role_id'
        }
    }
}, {sequelize, modelName: "User"});

export default User;