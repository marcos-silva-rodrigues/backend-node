import express, { Request, Response } from 'express';
import TaskService from '../services/task.services';

export default class HomeController {

  public router = express.Router();
  public path = '/task';
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService;
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.taskService.findAll);
    this.router.post(`${this.path}`, this.taskService.create);
  }

 }