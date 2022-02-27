import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/graphql')
routes(app);

app.listen(3000, () => {
  console.log('Express has been started');
});