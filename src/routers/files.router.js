import express from 'express'
import * as filesUsesCases from '../useCases/files.use.js'
import { auth } from '../middlewares/auth.js'
import { upload } from '../middlewares/multer.js'
import jwt_decode from 'jwt-decode'
const router = express.Router()

// GET /Files
router.get('/', async (request, response, next) => {
  try {
    const { page, limit } = request.query
    const skip = (page - 1) * 10
    const allFiles = await filesUsesCases.getAll().skip(skip).limit(limit)

    response.json({
      success: true,
      message: 'All files',
      data: {
        files: allFiles
      }
    })
  } catch (error) {
    next(error)
  }
})

// GET /Files /:id
router.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params
    const getFile = await filesUsesCases.getById(id)
    response.json({
      success: true,
      message: 'File found',
      data: {
        file: getFile
      }
    })
  } catch (error) {
    next(error)
  }
})

// CREATE /Files
router.post('/', auth, upload.any(), async (request, response, next) => {
  try {
    const token = request.headers.authorization
    const { id } = jwt_decode(token)
    const { body, files } = request
    const docCreated = await filesUsesCases.create(body, files, id)
    response.json({
      success: true,
      message: 'New file created',
      data: {
        files: docCreated
      }
    })
  } catch (error) {
    console.log(error);
    next(error)
  }
})

// DELETE /files
router.delete('/:id', auth, async (request, response, next) => {
  try {
    const { id } = request.params
    const fileDeleted = await filesUsesCases.deleteById(id)
    response.json({
      success: true,
      data: {
        message: 'File deleted'
      }
    })
  } catch (error) {
    next(error)
  }
})

// EDIT /Files
router.patch('/:id', auth, upload.any(), async (request, response, next) => {
  try {
    const { id } = request.params
    const { body, files } = request
    const fileUpdated = await filesUsesCases.update(id, body, files)

    response.json({
      success: true,
      message: 'File updated',
      data: {
        file: fileUpdated
      }
    })
  } catch (error) {
    next(error)
  }
})

export default router
