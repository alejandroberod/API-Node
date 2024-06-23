import sequelize from "./connect.db.js";
import UserStatus from "../models/UserStatusModel.js";
import Role from "../models/RoleModel.js";
import User from "../models/UserModel.js";
import Mark from "../models/MarkModel.js";
import Products from "../models/ProductsModel.js";
import ProductsImages from "../models/ProductsImagesModel.js";

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
        Mark.hasMany(Products, {
            foreignKey: {
                name: "mark_FK",
                field: "mark_FK",
                allowNull: true
            }
        });
        Products.belongsTo(Mark, {
            foreignKey: {
                name: "mark_FK",
                field: "mark_FK", 
                allowNull: true
            },
            constraints: true
        });
        Products.hasMany(ProductsImages, {
            foreignKey: {
                name: "product_FK",
                field: "product_FK",
                allowNull: true
            }
        });
        ProductsImages.belongsTo(Products, {
            foreignKey: {
                name: "product_FK",
                field: "product_FK", 
                allowNull: true
            },
            constraints: true
        });
        sequelize.sync();
    }
}