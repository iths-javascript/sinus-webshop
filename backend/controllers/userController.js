const User = require('../models/User')

module.exports = {
    me: async (req,res) => {
        const {name,email,role,address, orderHistory} = req.user
        res.json({name,email,role,address, orderHistory})
    },

    updateProfile: async (req,res) => {
        let result = await User.update(req.user._id, req.body)

        if(result.error){
            res.status(400).json({error: result.message})
        }else{
            res.json({message: 'Profile updated'})
        }
    }
}