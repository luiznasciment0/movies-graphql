import Koa from 'koa'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
import convert from 'koa-convert'
import graphqlHTTP from 'koa-graphql'

import schema from './schema/schema'

const app = new Koa()
const router = new Router()

app.use(bodyParser())

router.get('/', ctx => {
  const info = [
    '/graphql - GraphiQL',
    '/status - Status server'
  ]

  ctx.status = 200
  ctx.body = info.join('\n')
})

router.get('/status', ctx => {
  console.log('ta aqui')
  ctx.status = 200
  ctx.body = "running"
})

const graphQLApp = convert(
  graphqlHTTP(async (_request, response, ctx) => {
    return {
      graphiql: true,
      schema,
      rootValue: {
        request: response.req,
      },
      context: {
        ctx,
      }
    }
  })
)

router.all('/graphql', graphQLApp)
app.use(router.routes())

export default app