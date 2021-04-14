const { User } = require('../models')
const { comparePassword, generateToken } = require('../helpers')

class UserController {
  static async signin(req, res, next) {
    try {
      const { email, password } = req.body
      const verify_user = await User.findOne({ where: { email } })
      if (!verify_user) throw { status: 404, message: 'Invalid account' }
      else if (comparePassword(password, verify_user.password)) {
        const access_token = generateToken({ id: verify_user.id, email: verify_user.email })
        res.status(200).json({ access_token })
      }
      else throw { status: 400, message: 'Invalid account' }
    } catch (error) {
      next(error)
    }
  }

  static async getprofile(req, res, next) {
    try {
      const { id } = req.signed_in_user
      const find_user = await User.findOne({ where: { id } })
      res.status(200).json({
        id,
        email: find_user.email
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController