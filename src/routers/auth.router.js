import express from 'express'
import * as authUseCases from '../useCases/auth.use.js'
import { auth } from '../middlewares/auth.js'
import jwt from '../libs/jwt.js'

const router = express.Router()

router.post('/login', async (request, response, next) => {
  try {
    const { email, password } = request.body
    const userCurrent = await authUseCases.login(email, password)

    response.json({
      success: true,
      userCurrent
    })
  } catch (error) {
    next(error)
  }
})

router.post('/validate-email', auth, async (request, response, next) => {
  try {
    const { authorization: token } = request.headers
    const tokenDecoded = jwt.verify(token)
    const id = tokenDecoded.id
    const isValid = await authUseCases.validEmail(id)
    response.json({
      success: true,
      data: {
        message: isValid
      }
    })
  } catch (error) {
    next(error)
  }
})

router.post('/validate-email', auth, async (request, response, next) => {
  try {
    const { authorization: token } = request.headers
    const tokenDecoded = jwt.verify(token)
    const id = tokenDecoded.id
    const isValid = await authUseCases.validEmail(id)
    response.json({
      success: true,
      data: {
        message: isValid
      }
    })
  } catch (error) {
    next(error)
  }
})

export default router
