import { Advisor } from '../models/advisors.model.js'
import { StatusHttp } from '../libs/statusHttp.js'
import bcrypt from '../libs/bcrypt.js'

async function create (newAdvisor) {
  const { email, password } = newAdvisor
  const advisorFound = await Advisor.findOne({ email })
  if (advisorFound) {
    throw new StatusHttp('This advisor already exist!', 400)
  }
  const encryptedPassword = await bcrypt.hash(password)
  const newUser = await Advisor.create({ ...newAdvisor, password: encryptedPassword })
  return newUser
}

function getAll () {
  return Advisor.find({}).populate('docs')
}

async function getById (idAdvisor) {
  const advisorFound = await Advisor.findById(idAdvisor)
  if (!advisorFound) {
    throw new StatusHttp('Advisor not found', 400)
  }
  const advisor = Advisor.findById(advisorFound).populate('docs')
  return advisor
}

async function update (idAdvisor, newData, newFiles) {
  if (newFiles) {
    const image = newFiles.find(field => field.fieldname === 'image')
    if (image) {
      const { location, key } = image
      newData.image = location
      newData.keyImage = key
    }
    const identify = newFiles.find(field => field.fieldname === 'identify')
    if (identify) {
      const { location, key } = identify
      newData.identify = location
      newData.keyIdentify = key
    }
  }
  const advisorFound = await Advisor.findById(idAdvisor)
  if (!advisorFound) {
    throw new StatusHttp('Advisor not found', 400)
  }
  return Advisor.findByIdAndUpdate(idAdvisor, newData, { new: true })
}

async function deleteById (idAdvisor) {
  const advisorFound = await Advisor.findById(idAdvisor)
  if (!advisorFound) {
    throw new StatusHttp('Advisor not found', 400)
  }
  return Advisor.findByIdAndDelete(idAdvisor)
}

export {
  create,
  getAll,
  getById,
  update,
  deleteById
}
