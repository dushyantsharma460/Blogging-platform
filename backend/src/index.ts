import { Hono } from 'hono'
import apiRouter from './Routes'

const app = new Hono();

app.get('/api/v1', (c) => {
  return c.text('Hello Hono!')
})

app.route('/api/v1', apiRouter)

export default app