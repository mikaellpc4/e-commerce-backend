import express from 'express';
import admRouter from '@routes/admRoutes';
import userRouter from '@routes/userRoutes';
import apiErrorHandler from 'middlewares/errorHandler';

const app = express();
const port = 3000;

app.use(userRouter);
app.use(admRouter);
app.use(apiErrorHandler);

app.listen(port, () => {
  console.log(`API Listening on port ${port}`);
});
