import binary from './binary';
import error from './error';

export default (app) => {
  app.use('/binary', binary);
  app.use('/error', error);
}