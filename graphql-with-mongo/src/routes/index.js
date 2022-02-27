import { graphqlHTTP } from 'express-graphql';
import home from './home'
import Schema from '../graphql';

export default (app) => {
  app.use('/', home);
  app.use('/graphql', graphqlHTTP({
    schema: Schema,
    // schema: buildSchema(`type Query { msg: String }`),
    // rootValue: { msg: () => 'Hello world' },
    graphiql: true,
    pretty: true,
  }))
}