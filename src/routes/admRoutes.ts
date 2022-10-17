import express from 'express'

const admRouter = express.Router()

admRouter.get('/adm', (req,res) => {
    return res.status(200).json({message: 'adm routes'})
})

export default admRouter