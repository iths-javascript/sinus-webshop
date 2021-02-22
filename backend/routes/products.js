const {Router} = require('express')
const Auth = require('../middleware/auth')
const ProductController = require('../controllers/productController')

const router = new Router()

router.get('/',                       ProductController.getAllProducts)
router.get('/:id',                    ProductController.getProduct)
router.post('/',        Auth.admin,   ProductController.createProduct)
router.patch('/:id',    Auth.admin,   ProductController.updateProduct)
router.delete('/:id',   Auth.admin,   ProductController.deleteProduct)

module.exports = router