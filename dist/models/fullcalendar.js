"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const FullCalendar = connection_1.default.define('calendario', {
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = FullCalendar;
