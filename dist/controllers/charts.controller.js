"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postChart = exports.getChart = exports.getCharts = void 0;
const express_validator_1 = require("express-validator");
const charts_1 = __importDefault(require("../models/charts"));
const charts_validations_1 = require("../validations/charts.validations");
const getCharts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listChard = yield charts_1.default.findAll();
    res.json(listChard);
});
exports.getCharts = getCharts;
const getChart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const chart = yield charts_1.default.findByPk(id);
    if (chart) {
        res.json(chart);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un Chart con el id ${id}`
        });
    }
    ;
});
exports.getChart = getChart;
exports.postChart = [
    ...charts_validations_1.chartValidator,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { body } = req;
        try {
            yield charts_1.default.create(body);
            res.json({
                msg: 'Chart añadido con éxito!',
            });
        }
        catch (error) {
            console.log(error);
            res.json({
                msg: 'Error al añadir el Chart'
            });
        }
    })
];
// VERSION ORIGINAL
// import { Request, Response } from "express";
// import Chart from "../models/charts";
// export const getCharts = async (req: Request, res: Response) => {
//     const listChard = await Chart.findAll();
//     res.json( listChard );
// }
// export const getChart = async (req: Request, res: Response) => {
//     const { id } = req.params;
//     const chart = await Chart.findByPk(id);
//     if (chart) {
//         res.json(chart);
//     } else {
//         res.status(404).json({
//             msg: `ERROR 404. No existe un Chart con el id ${id}`
//         });
//     };
// }
// export const postChart = async (req: Request, res: Response) => {
//     const { body } = req;
//     try {
//         await Chart.create(body);
//         res.json({
//             msg: 'Chart añadido con éxito!',
//         });
//     } catch (error) {
//         console.log(error);
//         res.json({
//             msg: 'Error al añadir el Chart'
//         });
//     }
// }
