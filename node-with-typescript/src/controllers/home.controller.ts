import express, { Request, Response } from 'express';
import HomeService from '../services/home.services';

export default class HomeController {

  public router = express.Router();
  public path = '/';
  private homeService: HomeService;

  constructor() {
    this.homeService = new HomeService;
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get(`${this.path}`, this.homeService.helloWorld);
  }

 }