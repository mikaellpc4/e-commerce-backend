import express from 'express';
import admRouter from '@routes/admRoutes';
import userRouter from '@routes/userRoutes';
import apiErrorHandler from '@middlewares/errorHandler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json()); // Allow recieve JSON as data from Posts

app.use(userRouter);
app.use(admRouter);
app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`API Listening on port ${port}`);
});
