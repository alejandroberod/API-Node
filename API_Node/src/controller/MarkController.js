import Mark from "../models/MarkModel.js";

export const createMark = async (req, res) => {
    try {
        await Mark.sync();
        const {mark_name, mark_description} = req.body;
        const createMark = await Mark.create({
            mark_name,
            mark_description
        });
        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Mark created',
            id: createMark.mark_id
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showMark = async (req, res) => {
    try {
        await Mark.sync();
        const showMark = await Mark.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Mark',
            body: showMark
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdMark = async(req, res) => {
    try {
        await Mark.sync();
        const idMark = req.params.id;
        const showMarkId = await Mark.findOne({
            where: {
                mark_id: idMark
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show mark id',
            body: showMarkId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updateMark = async (req, res) => {
    try {
        await Mark.sync();
        const {mark_name, mark_description} = req.body;
        const idMark = req.params.id;
        const updateMark = await Mark.update({
            mark_name,
            mark_description
        }, {
            where: {
                mark_id: idMark
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Mark updated',
            body: updateMark
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deleteMark = async (req, res) => {
    try {
        await Mark.sync();
        const idMark = req.params.id;
        const deleteMark = await Mark.destroy({
            where: {
                mark_id: idMark
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Mark',
            body: deleteMark
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}