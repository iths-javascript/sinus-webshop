const AuthController = require('../controllers/authController')
const UserController = require('../controllers/userController')
const Auth = require('../middleware/auth')
const {Router} = require('express')

const router = new Router()

router.post(  '/auth',               AuthController.authenticate)
router.post(  '/register',           AuthController.register)
router.get(   '/me',      Auth.user, UserController.me)
router.patch( '/me',      Auth.user, UserController.updateProfile)

module.exports = router