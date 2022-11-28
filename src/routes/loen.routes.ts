import express from "express";
import {addLoan, getAllLoan,lendBook} from '../controller/loen.controller';
import validate from "../middleware/validate";
import { addLoanS } from '../zod_schema/schema';

const loanRouter = express.Router();

loanRouter.get(`/`, getAllLoan);
loanRouter.get(`/user/loan/:userid`, lendBook);
loanRouter.post(`/`, validate(addLoanS), addLoan);

export default loanRouter;