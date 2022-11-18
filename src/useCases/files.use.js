import { File } from '../models/files.model.js'
import { StatusHttp } from '../libs/statusHttp.js'
import { Advisor } from '../models/advisors.model.js'

async function create (data, files, userCurrent) {
  const docsCreated = await File.create(
    {
      ...data,
      curp_file: files[0].location,
      photo: files[1].location,
      rfc_file: files[2].location,
      adress_file: files[3].location,
      ine_file: files[4].location,
      bank_file: files[5].location
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
  if (newFiles) {
    const curp_file = newFiles.find(field => field.fieldname === 'curp_file')
    if (curp_file) {
      const { location } = curp_file
      newData.curp_file = location
    }
    const photo = newFiles.find(field => field.fieldname === 'photo')
    if (photo) {
      const { location } = photo
      newData.photo = location
    }
    const rfc_file = newFiles.find(field => field.fieldname === 'rfc_file')
    if (rfc_file) {
      const { rfc_file } = rfc_file
      newData.photo = rfc_file
    }
    const adress_file = newFiles.find(field => field.fieldname === 'adress_file')
    if (adress_file) {
      const { adress_file } = adress_file
      newData.photo = adress_file
    }
    const ine_file = newFiles.find(field => field.fieldname === 'ine_file')
    if (ine_file) {
      const { ine_file } = ine_file
      newData.photo = ine_file
    }

    const bank_file = newFiles.find(field => field.fieldname === 'clabeBank_file')
    if (bank_file) {
      const { bank_file } = bank_file
      newData.photo = bank_file
    }
  }
  const fileFound = await File.findById(idFile)
  if (!fileFound) {
    throw new StatusHttp('File not found', 400)
  }
  return File.findByIdAndUpdate(idFile, newData, { new: true })
}

async function deleteById (idFile) {
  const fileFound = await File.findById(idFile)
  if (!fileFound) {
    throw new StatusHttp('File not found', 400)
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
