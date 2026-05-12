import { Hono } from 'hono'
import userRouter from './user'
import blogRouter from './blog'

const apiRouter = new Hono()

apiRouter.route('/user', userRouter)
apiRouter.route('/blog', blogRouter)

export default apiRouter