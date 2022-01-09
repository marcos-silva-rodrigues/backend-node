import express, { RequestHandler } from 'express';
import morgan from 'morgan';

import App from './app';
import HomeController from './controllers/HomeController';

const app = new App({
  port: 3000,
  middlewares: [
    express.json(),
    express.urlencoded({ extended: false }),
    morgan('dev')
  ],
  controllers: [
    new HomeController(),
  ],
})

app.listen();