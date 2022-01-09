import express, { Application } from 'express';

class App {
  private app: Application;
  private port: number;

  constructor(appConfig: { port: number, middlewares: any, controllers: any }) {
    this.app = express();
    this.port = appConfig.port;
    this.setMiddlewares(appConfig.middlewares);
    this.setController(appConfig.controllers);
  }

  public listen() {
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
}

export default App;