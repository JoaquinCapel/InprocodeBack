"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const charts_controller_1 = require("../controllers/charts.controller");
const charts_validations_1 = require("../validations/charts.validations");
const router = (0, express_1.Router)();
router.get('/', charts_controller_1.getCharts);
router.get('/:id', charts_controller_1.getChart);
router.post('/', charts_validations_1.chartValidator, charts_controller_1.postChart);
exports.default = router;
// VERSIÓN ORIGINAL
// import {Router} from 'express';
// import {getChart, getCharts} from '../controllers/charts.controller';
// const router = Router();
// router.get('/', getCharts);
// router.get('/:id', getChart);
// export default router;
