"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chartjs_controllers_1 = require("../controllers/chartjs.controllers");
const router = (0, express_1.Router)();
router.get('/', chartjs_controllers_1.getCharts);
exports.default = router;
