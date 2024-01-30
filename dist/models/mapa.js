"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Mapa = connection_1.default.define('map', {
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    latitude: {
        type: sequelize_1.DataTypes.STRING,
    },
    longitude: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Mapa;
