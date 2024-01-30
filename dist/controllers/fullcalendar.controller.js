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
exports.postDate = exports.deleteDate = exports.getDate = exports.getListDates = void 0;
const fullcalendar_1 = __importDefault(require("../models/fullcalendar"));
const getListDates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listDates = yield fullcalendar_1.default.findAll();
    res.json(listDates);
});
exports.getListDates = getListDates;
const getDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const date = yield fullcalendar_1.default.findByPk(id);
    if (date) {
        res.json(date);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un evento con el id ${id}`
        });
    }
    ;
});
exports.getDate = getDate;
const deleteDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const date = yield fullcalendar_1.default.findByPk(id);
    if (!date) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un evento con el id ${id}`
        });
    }
    else {
        yield date.destroy();
        res.json({
            msg: `El evento con id ${id} ha sido eliminado con éxito`
        });
    }
});
exports.deleteDate = deleteDate;
const postDate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield fullcalendar_1.default.create(body);
        res.json({
            msg: 'Evento añadido con éxito!',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al añadir el Evento'
        });
    }
});
exports.postDate = postDate;
