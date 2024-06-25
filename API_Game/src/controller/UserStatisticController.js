import UserStatistic from "../models/UserStatisticModel.js";

export const createUserStatistic = async (req, res) => {
    try {
        await UserStatistic.sync();
        const {UserStatistic_wins, UserStatistic_lost, UserStatistic_draw, UserStatistic_games, user_FK} = req.body;
        const createUserStatistic = await UserStatistic.create({
            UserStatistic_wins, 
            UserStatistic_lost, 
            UserStatistic_draw, 
            UserStatistic_games, 
            user_FK
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'User statistic Created',
            id: createUserStatistic.UserStatistic_id
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showUserStatistic = async (req, res) => {
    try {
        await UserStatistic.sync();
        const showUserStatistic = await UserStatistic.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show User statistic',
            body: showUserStatistic
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showUserStatisticId = async (req, res) => {
    try {
        await UserStatistic.sync();
        const idShowUserStatistic = req.params.id;
        const showUserStatisticId = await UserStatistic.findOne({
            where: {
                user_FK: idShowUserStatistic
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show id user statistic',
            body: showUserStatisticId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const updateUserStatistic = async (req, res) => {
    try {
        await UserStatistic.sync();
        const idShowUserStatistic = req.params.id;
        const {UserStatistic_wins, UserStatistic_lost, UserStatistic_draw, UserStatistic_games, user_FK} = req.body;
        const updateUserStatistic = await UserStatistic.update({
            UserStatistic_wins, 
            UserStatistic_lost, 
            UserStatistic_draw, 
            UserStatistic_games, 
            user_FK
        }, {
            where: {
                UserStatistic_id: idShowUserStatistic
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Update user statistic',
            body: updateUserStatistic
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        })
    }
}

// export const deleteUserStatistic = async (req, res) => {
//     try {
//         await UserStatistic.sync();
//         const idShowUserStatistic = req.params.id;
//         const deleteUserStatistic = await UserStatistic.destroy({
//             where: {
//                 UserStatistic_id: idShowUserStatistic
//             }
//         });
//         res.status(200).json({
//             ok: true,
//             status: 204,
//             message: 'Delete user statistic',
//             body: deleteUserStatistic
//         });        
//     } catch (error) {
//         return res.status(500).json({
//             message: `Something went wrong in the request ${error}`,
//             status: 500
//         });
//     }
// }
