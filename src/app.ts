import express from 'express';
import 'dotenv/config';
import userRouter from "./routes/user.routes";
import bookRouter from "./routes/book.routes";

import { connectDB } from './config/db';
import loanRouter from './routes/loen.routes';

const app = express();

connectDB();
app.use(express.json());

app.use(`/api/v1/user`, userRouter);
app.use(`/api/v1/book`, bookRouter);
app.use(`/api/v1/loan`, loanRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running in port : ' + PORT);
});