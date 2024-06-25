import GameHistory from "../models/GameHistoryModel.js";
import { Op } from "sequelize";

export const createGameHistory = async(req, res) => {
    try {
        await GameHistory.sync();
        const {gameHistory_user1, gameHistory_user2, gameHistory_winner} = req.body;
        const createGameHistory = await GameHistory.create({
            gameHistory_user1, 
            gameHistory_user2, 
            gameHistory_winner
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Game History Created',
            id: createGameHistory.role_id
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showGameHistory = async (req, res) => {
    try {
        await GameHistory.sync();
        const showGameHistory = await GameHistory.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show game history',
            body: showGameHistory
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showGameHistoryId = async (req, res) => {
    try {
        await GameHistory.sync();
        const idGameHistory = req.params.id;
        const showGameHistoryId = await GameHistory.findAll({
            where: {
                [Op.or]: [
                    { gameHistory_user1: idGameHistory },
                    { gameHistory_user2: idGameHistory }
                ]
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show game history id',
            body: showGameHistoryId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const updateGameHistory = async (req, res) => {
    try {
        await GameHistory.sync();
        const idGameHistory = req.params.id;
        const {gameHistory_user1, gameHistory_user2, gameHistory_winner} = req.body;
        const updateGameHistory = await GameHistory.update({
            gameHistory_user1, 
            gameHistory_user2, 
            gameHistory_winner
        }, {
            where: {
                gameHistory_id: idGameHistory
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Update game history',
            body: updateGameHistory
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const deleteGameHistory = async (req, res) => {
    try {
        await GameHistory.sync();
        const idGameHistory = req.params.id;
        const deleteGameHistory = await GameHistory.destroy({
            where: {
                gameHistory_id: idGameHistory
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete game history',
            body: deleteGameHistory
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}