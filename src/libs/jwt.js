import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'

dotenv.config()

const { JWT_SECRET } = process.env

function sign (payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '5d' })
}

function verify (token) {
  return jwt.verify(token, JWT_SECRET)
}

export default {
  ...jwt,
  sign,
  verify
}
