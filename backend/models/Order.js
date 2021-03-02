const NeDB = require('nedb-promise')
const orders = new NeDB({ filename: 'database/orders.db', autoload: true })
const Product = require('./Product')
const User = require('./User')
const VALID_STATUS = ['inProcess', 'shipped', 'delivered', 'canceled']

function validate(body) {
    let { items } = body
    if (items) { return true }
    return false
}

module.exports = {
    async create(body, user) {
        if (!validate(body)) {
            return {
                error: true, message: 'Items not present'
            }
        }

        const { items } = body
        let products = await Product.find(items)

        try {
            items.forEach(id => {
                const product = products.find(product => product._id == id);

                if (!product) { throw Error('NOT_FOUND') }

                ['shortDesc', 'category', 'longDesc'].forEach(key => delete product[key]);
                if (product.amount) { product.amount++ }
                else { product.amount = 1 }
            })

        } catch (error) {
            if (error.message == 'NOT_FOUND') { return { error: true, message: `Order contains non existing products` } }
        }

        const order = await orders.insert({
            items: products,
            timeStamp: Date.now(),
            status: 'inProcess',
            orderValue: products.reduce((acc, product) => acc + product.price * product.amount, 0)
        })

        await User.addOrderToUser(order, user)
        return { error: false, order }
    },

    async setStatus(id, status) {
        if (!VALID_STATUS.includes(status)) {
            return { error: true, message: `Invalid status, valid status include: ${VALID_STATUS.join(', ')}` }
        }
        let numUpdated = await orders.update({ _id: id }, { status })

        if (numUpdated) {
            return { error: false }
        } else {
            return { error: true, message: `Order with ID ${id} not found` }
        }
    },
    async all() {
        const ords = await orders.find({})
        return ords.sort((a, b) => a.timeStamp - b.timeStamp)
    },

    async findByCustomer(userID) {
        let user = await User.findOne(userID)
        const ords = await orders.find({ _id: { $in: user.orderHistory } })
        return ords
    }
}