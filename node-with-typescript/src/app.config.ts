import express, { Application } from 'express';
import mongoose from 'mongoose';

class App {
  private app: Application;
  private port: number;

  constructor(appConfig: { port: number, middlewares: any, controllers: any }) {
    this.app = express();
    this.port = appConfig.port;
    this.setMongooseConnection();
    this.setMiddlewares(appConfig.middlewares);
    this.setController(appConfig.controllers);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log("Express has been started ...");
    });
  }

  private setMiddlewares(middlewares: { forEach: (mid: (middleware: any)=> void) => void;  }) {
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private setController(controllers: { forEach: (con: (con: any)=> void) => void;  }) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  private setMongooseConnection() {
    mongoose.connect('mongodb://localhost:27017/type', {
      authSource: 'admin',
      auth: {
        username: 'root',
        password: 'example'
      }
    });
  }

}

export default App;