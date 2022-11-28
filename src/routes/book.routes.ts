import express from "express";
import { addBook, getAllBooks } from "../controller/book.controller";
import validate from "../middleware/validate";
import { addBooksS } from '../zod_schema/schema';

const bookRouter = express.Router();

bookRouter.get(`/`, getAllBooks);
bookRouter.post(`/`, validate(addBooksS), addBook);

export default bookRouter;