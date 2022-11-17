import express from 'express'
import cors from 'cors'

const server = express()

//middlewares
server.use(express.json())
server.use(cors())

export { server }