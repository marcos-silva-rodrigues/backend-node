import express, { RequestHandler } from 'express';
import morgan from 'morgan';

import App from './app.config';
import HomeController from './controllers/home.controller';
import myMiddleware from './middlewares/log.middleware';

const app = new App({
  port: 3000,
  middlewares: [
    express.json(),
    express.urlencoded({ extended: false }),
    morgan('dev'),
    myMiddleware
  ],
  controllers: [
    new HomeController(),
  ],
})

app.listen();