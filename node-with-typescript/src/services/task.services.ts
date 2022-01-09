import { Request, Response } from "express";

export default class TaskService {
  public findAll(req: Request, res: Response) {
    return res.json({ msg: 'Hello World From Express + Typescript' });
  }

  public create(req: Request, res: Response) {
    return res.json({ msg: 'Hello World From Express + Typescript' });
  }
}