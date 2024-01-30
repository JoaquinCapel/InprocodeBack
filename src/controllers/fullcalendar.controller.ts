import { Request, Response } from "express";
import FullCalendar from "../models/fullcalendar";


export const getListDates = async (req: Request, res: Response) => {
    const listDates = await FullCalendar.findAll();

    res.json( listDates );
}

export const getDate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const date = await FullCalendar.findByPk(id);

    if (date) {
        res.json(date);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un evento con el id ${id}`
        });
    };
}

export const deleteDate = async (req: Request, res: Response) => {
    const { id } = req.params;
    const date = await FullCalendar.findByPk(id);

    if (!date) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un evento con el id ${id}`
        });
    } else {
        await date.destroy();
        res.json({
            msg: `El evento con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postDate = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await FullCalendar.create(body);

        res.json({
            msg: 'Evento añadido con éxito!',
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al añadir el Evento'
        });
    }
}

