"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Chart = connection_1.default.define('charts', {
    year: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    colorcode: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Chart;
