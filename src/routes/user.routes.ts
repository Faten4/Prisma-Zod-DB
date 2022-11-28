import express from 'express';
import { addUser, getAllUsers } from '../controller/user.controller';
import validate from '../middleware/validate';
import { addUserS } from '../zod_schema/schema';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/',validate(addUserS), addUser);


export default router;