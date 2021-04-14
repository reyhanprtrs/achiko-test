const route = require('express').Router()
const { authentication } = require('../middlewares')
const UserController = require('../controllers/user')

route.post('/signin', UserController.signin)
route.use(authentication)
route.get('/profile', UserController.getprofile)

module.exports = route