const Order = require('../models/Order')

module.exports = {
    getOrder: async (req, res) => {
        let orders;
        if (req.user.role == 'admin') {
            orders = await Order.all()
        } else {
            orders = await Order.findByCustomer(req.user._id)
        }
        res.json(orders)
    },

    createOrder: async (req, res) => {
        let result = await Order.create(req.body, req.user)
        if (result.error) {
            res.status(400).json({ error: result.message })
        } else {
            res.json({ ...result.order })
        }
    },

    updateOrderStatus: async (req, res) => {
        let result = await Order.setStatus(req.params.id, req.body.status)
        if (result.error) {
            res.status(400).json({ error: result.message })
        } else {
            res.json({ message: `Order status for ${req.params.id} set to ${req.body.status}` })
        }
    }
}