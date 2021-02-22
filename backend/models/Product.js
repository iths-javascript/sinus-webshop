const NeDB = require('nedb-promise')
const products = new NeDB({filename:'database/products.db', autoload: true})

const Errors = require('../errors')

const categorySort = (a,b) => a.category < b.category ? -1 : 1


module.exports = {
    async find(params){
        if(params.length){
            return await products.find({_id: {$in:params}})
        }else{
            return await products.find(params)
        }
    },

    async get(id){
        return await products.findOne({_id:id})
    },

    async all(){
        try{
            let prods = await products.find({})
            prods = prods.sort(categorySort)
            return prods

        }catch(error){
            console.log(error)
            return false
        }
    },

    async create(body){
        let {title, price, shortDesc, longDesc, imgFile} = body
        let serial = Date.now()
        try{
            const product = await products.insert({title, price, shortDesc, longDesc, imgFile, serial})
            return {error: false, product}
        }catch(err){
            return {error: true, message:err}
        }
    },

    async update(productId, body){
        try{
            const keys = ['title', 'price', 'shortDesc', 'longDesc', 'imgFile'];
            let patch = keys.reduce((acc, key) => {
                if(body[key]){ acc[key] = body[key] }
                return acc
            }, {})
            
            const numUpdated = await products.update({_id:productId}, patch)

            if(numUpdated > 0){
                const product = await products.findOne({_id:productId})
                return {error: Errors.NO_ERROR, data: product}
            }else{
                return {error: Errors.NOT_FOUND}
            }

        }catch(error){
            return {error: Errors.INVALID_PARAMETERS, message:error}
        }
    },

    async destroy(productId){
        try{
            await products.remove({_id:productId})
            return {error:false}
        }catch(error){
            console.log(error)
            return {error:true}
        }
    }

}