import bcrypt from 'bcrypt'

const saltRound = 10

function hash (plainText) {
  return bcrypt.hash(plainText, saltRound)
}

export default {
  ...bcrypt,
  hash
}
