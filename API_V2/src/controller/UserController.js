import User from "../models/UserModel.js";
import { faker } from "@faker-js/faker";

export const createUser = async (req, res) => {
    try {
        await User.sync();
        const dataUser = req.body;
        const createUser = await User.create({
            user_user: dataUser.user_name,
            user_password: dataUser.user_password,
            UserStatus_FK: dataUser.status,
            role_FK: dataUser.role
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Create User',
            id: createUser.user_id
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        });
    }
}

export const showUser = async (req,res) => {
    try {
        const users = await User.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Users',
            body: users
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        });
    }
}

export const showUserId = async (req, res) => {
    try {
        const idUser = req.params.id;
        const user = await User.findOne({
            where: {
                user_id: idUser
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show User id',
            body: user
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.sync();
        const dataUser = req.body;
        const idUser = req.params.id;
        const updateUser = await User.update({
            user_user: dataUser.user_name,
            user_password: dataUser.user_password,
            userStatus_FK: dataUser.status,
            role_FK: dataUser.role
        },{
            where: {
                user_id: idUser
         }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Update User',
            body: updateUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.sync();
        const idUser = req.params.id;
        const deleteUser = await User.destroy({
            where: {
                user_id: idUser
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete User',
            body: deleteUser
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        });
    }
}

export const createUserFK = async (req, res) => {
    try {
        await userModel.sync();
        const createUser = await User.create({
            user_user: faker.internet.email(),
            user_password: faker.internet.password(),
            UserStatus_FK: 1,
            role_FK: 1
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Create User',
            id: createUser.user_id
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong in the request",
            status: 500
        });
    }
}