const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(8)
  return bcrypt.hashSync(password, salt)
}

const comparePassword = (password, hashed) => {
  return bcrypt.compareSync(password, hashed)
}

module.exports = { hashPassword, comparePassword }