import express, { Request, Response } from 'express';

export default class HomeController {

  public router = express.Router();
  public path = '/';

  constructor() {
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.helloWord);
  }

  helloWord = (req: Request, res: Response) => {
    return res.json({ msg: 'Hello World From Express + Typescript' });
  }
 }