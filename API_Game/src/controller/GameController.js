import Game from "../models/GameModel.js";

export const createGame = async (req, res) => {
    try {
        await Game.sync();
        // const {game_user1, game_user2, game_winner} = req.body;
        const createGame = await Game.create({
            game_user1: null, 
            game_user2: null, 
            game_winner: null
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Game Created',
            id: Date.now()
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showGame = async (req, res) => {
    try {
        await Game.sync();
        const showGame = await Game.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Game',
            body: showGame
        });     
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

export const showGameId = async (req, res) => {
    try {
        await Game.sync();
        const idGame = req.params.id;
        const showGameId = await Game.findOne({
            where: {
                game_id: idGame
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show id Game',
            body: showGameId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}

let array = []
export const joinGame = async (req, res) => {
    try {
        await Game.sync();
        const idGame = req.params.id;
        const player = req.body;
        array.push(player.user_id);
        if (array.length > 2) {
            res.status(404).json({
                ok: true,
                status: 404,
                message: 'The room isn\'t avalaible',
            });
        } else if (array[1] == array[0]) {
            array.pop();
            res.status(404).json({
                ok: true,
                status: 404,
                message: 'Unable to play with yourself',
            });
        } else if(array.length == 2) {
            console.log(array[0])
            const updateRole = await Game.update({
                game_user1: array[0],
                game_user2: array[1],
                game_winner: null
            }, {
                where: {
                    game_id: idGame
                }
            });
            res.status(200).json({
                ok: true,
                status: 200,
                message: 'Game found',
                body: updateRole
            });
        } else {
            res.status(200).json({
                ok: true,
                status: 200,
                message: 'Waiting another player',
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500
        });
    }
}


// {
//     "game_user1": "91b246f1-e175-44a0-bb5e-049487e89dc5",
//     "game_user2": "fc6e5863-6819-4087-bc5f-1fb3bbad7c96",
// }