import Koa from 'koa'
import graphqlHTTP from 'koa-graphql'
import mount from 'koa-mount'
import Schema from './schema/schema'

const app = new Koa()

app.on('error', err => {
  console.log('server error', err)
})

app.use(mount('/graphql', graphqlHTTP({
  graphiql: true,
  schema: Schema,
})))

export default app