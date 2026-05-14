import { Hono } from 'hono'
import apiRouter from './Routes'
import { cors } from 'hono/cors'

const app = new Hono();

app.use('/api/*', cors())

app.get('/api/v1', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1', apiRouter)

export default app