import express from 'express'
import admRouter from '@routes/admRoutes'
import userRouter from '@routes/userRoutes'

const app = express()
const port = 3000

app.use(userRouter)
app.use(admRouter)

app.listen(port, () => {
    console.log(`API Listening on port ${port}`)
})