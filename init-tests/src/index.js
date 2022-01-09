import express from "express";
import morgan from "morgan";
import routes from './routes';

const app = express();

app.use(morgan());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

routes(app);

app.listen(3000, () => {
  console.log("Express has been started ...");
});

export default app;