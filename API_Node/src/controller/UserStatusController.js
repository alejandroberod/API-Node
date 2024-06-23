import UserStatus from "../models/UserStatusModel.js";
export const createUserStatus = async (req, res) => {
    try {
        await UserStatus.sync();
        const dataUserStatus = req.body;
        const createUser = await UserStatus.create({
            userStatus_name: dataUserStatus.status_name,
            userStatus_descriptions: dataUserStatus.status_descriptions
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Create User Status',
            id: createUser.userStatus_id
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showUserStatus = async (req,res) => {
    try {
        const users = await UserStatus.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Users Status',
            body: users
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showUserStatusId = async (req, res) => {
    try {
        const idStatus = req.params.id;
        const user = await UserStatus.findOne({
            where: {
                userStatus_id: idStatus
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show User Status id',
            body: user
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        })
    }
}

export const updateUserStatus = async (req, res) => {
    try {
        await UserStatus.sync();
        const dataUserStatus = req.body;
        const idStatus = req.params.id;
        const updateUser = await UserStatus.update({
            userStatus_name: dataUserStatus.status_name,
            userStatus_descriptions: dataUserStatus.status_descriptions,
        },{
            where: {
                userStatus_id: idStatus
         }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Update User Status',
            body: updateUser
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        })
    }
}

export const deleteUserStatus = async (req, res) => {
    try {
        await UserStatus.sync();
        const idStatus = req.params.id;
        const deleteUser = await UserStatus.destroy({
            where: {
                userStatus_id: idStatus
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete User Status',
            body: deleteUser
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}