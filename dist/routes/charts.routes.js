"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charts_controller_1 = require("../controllers/charts.controller");
const router = (0, express_1.Router)();
router.get('/', charts_controller_1.getCharts);
router.get('/:id', charts_controller_1.getChart);
exports.default = router;
