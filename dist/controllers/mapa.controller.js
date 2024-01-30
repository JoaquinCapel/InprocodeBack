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
exports.updateMap = exports.postMap = exports.deleteMap = exports.getMap = exports.getMaps = void 0;
const mapa_1 = __importDefault(require("../models/mapa"));
const getMaps = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMaps = yield mapa_1.default.findAll();
    res.json(listMaps);
});
exports.getMaps = getMaps;
const getMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mapa = yield mapa_1.default.findByPk(id);
    if (mapa) {
        res.json(mapa);
    }
    else {
        res.status(404).json({
            msg: `ERROR 404. No existe un Mapa con el id ${id}`
        });
    }
    ;
});
exports.getMap = getMap;
const deleteMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const map = yield mapa_1.default.findByPk(id);
    if (!map) {
        return res.status(404).json({
            msg: `ERROR 404. No existe un Mapa con el id ${id}`
        });
    }
    else {
        yield map.destroy();
        res.json({
            msg: `Mapa con id ${id} ha sido eliminado con éxito`
        });
    }
});
exports.deleteMap = deleteMap;
const postMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield mapa_1.default.create(body);
        res.json({
            msg: 'Mapa añadido con éxito!',
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al añadir el Mapa'
        });
    }
});
exports.postMap = postMap;
const updateMap = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    const map = yield mapa_1.default.findByPk(id);
    try {
        if (!map) {
            res.status(404).json({
                msg: `ERROR 404. No existe un Mapa con el id ${id}`
            });
        }
        else {
            yield map.update(body);
            res.json({
                msg: `El Mapa con id ${id} ha sido actualizado con éxito!`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: 'Error al actualizar el Mapa'
        });
    }
});
exports.updateMap = updateMap;
