const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
  return jwt.sign(payload, 'achikotest')
}

const verifyToken = (token) => {
  return jwt.verify(token, 'achikotest')
}

module.exports = { generateToken, verifyToken }