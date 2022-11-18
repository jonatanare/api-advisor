import { Advisor } from '../models/advisors.model.js'
import { StatusHttp } from '../libs/statusHttp.js'
import bcrypt from '../libs/bcrypt.js'
import jwt from '../libs/jwt.js'

async function login (email, password) {
  const emailFound = await Advisor.findOne({ email })
  if (!emailFound) throw new StatusHttp('invalid!')
  const isValidPassword = await bcrypt.compare(password, emailFound.password)
  if (!isValidPassword) throw new StatusHttp('try again!')

  return {
    token: jwt.sign({ id: emailFound._id }),
    userCurrent: {
      id: emailFound._id,
      name: emailFound.name
    }
  }
}

export {
  login
}
