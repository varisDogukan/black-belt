import 'express-async-errors';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// database
import connectDB from './database/connect';

// routes
import authRouter from './routes/authRoutes';
import pirateRouter from './routes/pirateRoutes';

// middleware
import errorHandlerMiddleware from './middleware/error-handler';
import notFoundMiddleware from './middleware/not-found';
import authenticateUser from './middleware/auth';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

const base = '/api/v1';

app.use(`${base}/auth`, authRouter);
app.use(`${base}/pirates`, authenticateUser, pirateRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

export default app;
