import express from 'express'
import cors from 'cors'
import handlerErrors from './middlewares/handleError.js'
import authRouter from './routers/auth.router.js'
import advisorsRouter from '../src/routers/advisors.router.js'
import filesRouter from '../src/routers/files.router.js'

const server = express()

// middlewares
server.use(express.json())
server.use(cors())
server.use(handlerErrors)

// routes
server.use('/advisors', advisorsRouter)
server.use('/auth', authRouter)
server.use('/files', filesRouter)

export { server }
