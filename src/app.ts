import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import cors from 'koa-cors'

import schema from './schema/schema'

const app = new Koa()

app.use(bodyParser())
app.use(cors())

app.use(mount('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
})))

export default app