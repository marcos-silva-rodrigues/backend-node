import { Request, Response } from "express";
import TaskModel, { ITask } from "../models/task.model";
export default class TaskService {
  public async findAll(req: Request, res: Response) {
    const results = await TaskModel.find({});
    return res.json(results);
  }

  public async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    return res.json(task);
  }

  public async create(req: Request, res: Response) {
    const task = req.body as ITask;
    const taskCreated = await TaskModel.create(task);
    return res.status(201).json(taskCreated);
  }
}