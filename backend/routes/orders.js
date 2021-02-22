const {Router} = require('express')
const Auth = require('../middleware/auth')
const OrderController = require('../controllers/orderController')

const router = new Router()

router.get('/', Auth.user, OrderController.getOrder )
router.post('/',Auth.anonymous, OrderController.createOrder )

module.exports = router