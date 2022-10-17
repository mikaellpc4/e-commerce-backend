import express from 'express'

const userRouter = express.Router()

userRouter.get('/', (req,res) => {
    return res.status(200).json({message: 'user routes'})
})

export default userRouter