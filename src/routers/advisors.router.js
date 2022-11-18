import express from 'express'
import * as advisorsUseCases from '../useCases/advisors.use.js'
import { auth } from '../middlewares/auth.js'
import { upload } from '../middlewares/multer.js'

const router = express.Router()

// GET
router.get('/', async (request, response, next) => {
  try {
    const allAdvisors = await advisorsUseCases.getAll()

    response.json({
      success: true,
      message: 'All Advisors',
      data: {
        advisors: allAdvisors
      }
    })
  } catch (error) {
    next(error)
  }
})

// GET
router.get('/:idAdvisor', async (request, response, next) => {
  try {
    const { idAdvisor } = request.params

    const getAdvisor = await advisorsUseCases.getById(idAdvisor)
    response.json({
      success: true,
      message: 'Advisor',
      data: {
        advisor: getAdvisor
      }
    })
  } catch (error) {
    next(error)
  }
})

// POST
router.post('/', async (request, response, next) => {
  try {
    const { body: newAdvisor } = request

    const advisorCreated = await advisorsUseCases.create(newAdvisor)

    response.json({
      success: true,
      message: 'Advisor created',
      data: advisorCreated
    })
  } catch (error) {
    next(error)
  }
})

// DELETE
router.delete('/:id', auth, async (request, response, next) => {
  try {
    const { id } = request.params

    const advisorDeleted = await advisorsUseCases.deleteById(id)

    response.json({
      success: true,
      message: 'Advisor deleted'
    })
  } catch (error) {
    next(error)
  }
})

// PATCH
router.patch('/:id', auth, upload.any(), async (request, response, next) => {
  try {
    const { id } = request.params
    const { body, files } = request

    const advisorUpdated = await advisorsUseCases.update(id, body, files)
    response.json({
      success: true,
      message: 'Advisor updated',
      data: {
        advisor: advisorUpdated
      }
    })
  } catch (error) {
    next(error)
  }
})

export default router
