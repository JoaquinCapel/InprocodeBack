import {Router} from 'express';
import {deleteDate, getDate, getListDates, postDate} from '../controllers/fullcalendar.controller';

const router = Router();

router.get('/', getListDates);
router.get('/:id', getDate);
router.delete('/:id', deleteDate);
router.post('/', postDate);

export default router;