import z from 'zod'

export const SignupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional()
})

export const SignInInput = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const createBlogInputs = z.object({
  title: z.string(),
  content: z.string()
})

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string()
})

// for showing zod on frontend we need to use type inference in zod
export type SignupInput = z.infer<typeof SignupInput>
export type createBlogInputs = z.infer<typeof createBlogInputs>
export type updateBlogInput = z.infer<typeof updateBlogInput>
export type SignInInput = z.infer<typeof SignInInput>

// lekin dikkat toh isma bhi hai how i can import this zod type into backend (as cloudflare says i not understand outside the backend folder)
// use monorepo for this problem    |    publish your zod to npm then use it in your project
// now i publish this file to npm and use it in backend folder

// Step 1:- change the name to unique name in package.json prefix with your username
// Step 2:- change this -> "main": "dist/index.js",
// Step 3:- npm login
// Step 4:- tsc -b   ->   compile the code
// Step 5:- create .npmignore  -> add src into it
// Step 6:- npm publish --access public   |    npm publish --access public --otp=123456 for this first do 2FA checking via installing google authenticator in phone
// Step 7:- Now it publish install it and use it 