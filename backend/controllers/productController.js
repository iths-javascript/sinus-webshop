const Product = require('../models/Product')
const Errors = require('../errors')

module.exports = {
    getAllProducts: async (req,res) => {
        let products = await Product.all()
        res.json(products)
    },
    getProduct: async (req,res) => {
        const product = await Product.get(req.params.id)
        if(product){
            res.json(product)
        }else{
            res.status(404).json({
                error: 'Product not found'
            })
        }
    },
    createProduct: async (req,res) => {
        let result = await Product.create(req.body)
        if(result.error){
            res.json({
                error: "Could not create product"
            })
        }else{
            res.json({
                message: "Product created!",
                product: result.product
            })
        }
    },

    updateProduct: async (req,res) => {
        let result = await Product.update(req.params.id, req.body)
        switch(result.error){
            case Errors.NO_ERROR:
                res.status(200).json({message: 'Product updated', data: result.data}); break;
            case Errors.NOT_FOUND:
                res.status(404).json({message: `Product with id ${req.params.id} not found`}); break;
            case Errors.INVALID_PARAMETERS:
                res.status(400).json({error: 'Could not update product', message: result.message})
        }
    },

    deleteProduct: async (req,res) => {
        let result = await Product.destroy(req.params.id)
        if(result.error){
            res.status(400).json({error: 'Could not delete product'})
        }else{
            res.status(200).json({message: 'Product obliteraded'})
        }
    }

}