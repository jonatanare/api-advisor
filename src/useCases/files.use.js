import { File } from '../models/files.model.js'
import { StatusHttp } from '../libs/statusHttp.js'
import { Advisor } from '../models/advisors.model.js'
import { s3 } from '../libs/s3/index.js'
import config from '../libs/s3/config.js'

async function create (data, files, userCurrent) {
  const docsCreated = await File.create(
    {
      ...data,
      curp_file: files[0].location,
      keyCurp: files[0].key,
      photo: files[1].location,
      keyPhoto: files[1].key,
      rfc_file: files[2].location,
      keyRfc: files[2].key,
      address_file: files[3].location,
      keyAddress: files[3].key,
      ine_file: files[4].location,
      keyIne: files[4].key,
      bank_file: files[5].location,
      keyBank: files[5].key
    })
  await Advisor.findByIdAndUpdate(userCurrent, {
    $push: { docs: docsCreated._id }
  })
  return docsCreated
}

function getAll () {
  return File.find({})
}

async function getById (idFile) {
  const fileFound = await File.findById(idFile)
  if (!fileFound) {
    throw new StatusHttp('File not found', 400)
  }
  const file = File.findById(fileFound)
  return file
}

async function update (idFile, newData, newFiles) {
  const fileFound = await File.findById(idFile)
  if (!fileFound) throw new StatusHttp('File not found', 400)

  if (newFiles) {
    const curp_file = newFiles.find(field => field.fieldname === 'curp_file')
    if (curp_file) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyCurp, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const { location, key } = curp_file
      newData.curp_file = location
      newData.keyCurp = key

    }
    const photo = newFiles.find(field => field.fieldname === 'photo')
    if (photo) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyPhoto, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const { location, key } = photo
      newData.photo = location
      newData.keyPhoto = key

    }
    const rfc_file = newFiles.find(field => field.fieldname === 'rfc_file')
    if (rfc_file) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyRfc, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const { location, key } = rfc_file
      newData.rfc_file = location
      newData.keyRfc = key

    }
    const address_file = newFiles.find(field => field.fieldname === 'address_file')
    if (address_file) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyAddress, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const { location, key } = address_file
      newData.adress_file = location
      newData.keyAddress = key

    }
    const ine_file = newFiles.find(field => field.fieldname === 'ine_file')
    if (ine_file) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyIne, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const { location, key } = ine_file
      newData.ine_file = location
      newData.keyIne = key

    }

    const bank_file = newFiles.find(field => field.fieldname === 'clabeBank_file')
    if (bank_file) {
      const replaceImg = s3.deleteObject({ Key: fileFound.keyBank, Bucket: config.AWS_BUCKET_NAME }).promise()
      if (!replaceImg) throw new StatusHttp('Try again', 400)
      const {  location, key } = bank_file
      newData.clabeBank_file = location
      newData.keyBank = key

    }

  }
 
  return File.findByIdAndUpdate(idFile, newData, { new: true })
}

async function deleteById (idFile) {
  const fileFound = await File.findById(idFile)
  if (!fileFound) {
    throw new StatusHttp('File not found', 400)
  }
  if (fileFound.curp_file) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyCurp, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  if (fileFound.photo) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyPhoto, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  if (fileFound.rfc_file) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyRfc, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  if (fileFound.address_file) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyAddress, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  if (fileFound.ine_file) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyIne, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  if (fileFound.bank_file) {
    const deleteImg = s3.deleteObject({ Key: fileFound.keyBank, Bucket: config.AWS_BUCKET_NAME }).promise()
    if (!deleteImg) throw new StatusHttp('Try again!', 400)
  }
  return File.findByIdAndDelete(idFile)
}

export {
  create,
  getAll,
  getById,
  update,
  deleteById
}
