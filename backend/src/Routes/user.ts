import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
// import { SignupInput } from '../../../common/src/index'
import { SignupInput, SignInInput } from '@dushyantsharma460/medium-common'

const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

userRouter.post('/signup', async (c) => {

  try {

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const { success } = SignupInput.safeParse(body);

    if (!success) {
      return c.json({
        error: 'Invalid input from Zod Error'
      }, 400)
    }

    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name
      }
    })

    const token = await sign(
      { id: user.id },
      c.env.JWT_SECRET
    )

    return c.json({
      jwt: token
    })

  } catch (e) {

    console.log("SIGNUP ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

userRouter.post('/signin', async (c) => {

  try {

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    const body = await c.req.json()

    const { success } = SignInInput.safeParse(body);

    if (!success) {
      return c.json({
        error: 'Invalid input from Zod Error'
      }, 400)
    }

    const user = await prisma.user.findUnique({
      where: {
        email: body.email
      }
    })

    if (!user || user.password !== body.password) {

      return c.json({
        error: 'Invalid credentials'
      }, 403)
    }

    const jwt = await sign(
      { id: user.id },
      c.env.JWT_SECRET
    )

    return c.json({
      jwt: jwt
    })

  } catch (e) {

    console.log("SIGNIN ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

export default userRouter