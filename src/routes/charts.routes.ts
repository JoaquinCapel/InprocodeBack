import {Router} from 'express';
import {getChart, getCharts} from '../controllers/charts.controller';

const router = Router();

router.get('/', getCharts);
router.get('/:id', getChart);
export default router;