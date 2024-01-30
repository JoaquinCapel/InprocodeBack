import { Request, Response } from "express";
import Producto from "../models/producto";


export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll();

    res.json( listProducts );
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `ERROR 404. No existe un producto con el id ${id}`
        });
    };
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (!product) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un producto con el id ${id}`
        });
    } else {
        await product.destroy();
        res.json({
            msg: `Producto con id ${id} ha sido eliminado con éxito`
        });
    }
}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Producto.create(body);

        res.json({
            msg: 'Producto añadido con éxito!',
        });

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al añadir el producto'
        });
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    const product = await Producto.findByPk(id);

    try {
        if (!product) {
            res.status(404).json({
                msg: `ERROR 404. No existe un producto con el id ${id}`
            });
        } else {
            await product.update(body);
            res.json({
                msg: `El producto con id ${id} ha sido actualizado con éxito!`
            });
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al actualizar el producto'
        });
    }


}