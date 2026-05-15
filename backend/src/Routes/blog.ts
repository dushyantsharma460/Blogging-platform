import { Hono } from 'hono'
import { verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { createBlogInputs, updateBlogInput } from '@dushyantsharma460/medium-common'

const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }

  Variables: {
    userId: string
  }
}>()

blogRouter.use('*', async (c, next) => {

  try {

    const header = c.req.header("Authorization") || ""

    const token = header.split(" ")[1]

    if (!token) {

      return c.json({
        error: "Token missing"
      }, 403)
    }

    const payload = await verify(
      token,
      c.env.JWT_SECRET,
      'HS256'
    )

    if (payload.id) {

      c.set('userId', payload.id as string)

      await next()

    } else {

      return c.json({
        error: "Unauthorized"
      }, 403)
    }

  } catch (e) {

    console.log("JWT ERROR:", e)

    return c.json({
      error: "Invalid token"
    }, 403)
  }
})

// create blog
blogRouter.post('/', async (c) => {

  try {

    const authorId = c.get("userId")

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()


    const { success } = createBlogInputs.safeParse(body);

    if (!success) {
      return c.json({
        error: 'Invalid input from Zod Error'
      }, 400)
    }



    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: authorId
      }
    })

    return c.json({
      id: blog.id
    })

  } catch (e) {

    console.log("CREATE BLOG ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

// update blog
blogRouter.put('/', async (c) => {

  try {

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const body = await c.req.json()


    const { success } = updateBlogInput.safeParse(body);

    if (!success) {
      return c.json({
        error: 'Invalid input from Zod Error'
      }, 400)
    }

    const blog = await prisma.post.update({
      where: {
        id: body.id
      },
      data: {
        title: body.title,
        content: body.content
      }
    })

    return c.json({
      id: blog.id
    })

  } catch (e) {

    console.log("UPDATE BLOG ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

// get all blogs
blogRouter.get('/bulk', async (c) => {

  try {

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
      blogs
    })

  } catch (e) {

    console.log("GET BLOGS ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

// get single blog
blogRouter.get('/:id', async (c) => {

  try {

    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    const blog = await prisma.post.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    })

    return c.json({
      blog
    })

  } catch (e) {

    console.log("GET BLOG ERROR:", e)

    return c.json({
      error: String(e)
    }, 500)
  }
})

export default blogRouter