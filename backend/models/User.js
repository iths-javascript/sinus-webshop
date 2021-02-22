const NeDB = require('nedb-promise')
const bcrypt = require('bcryptjs')
const users = new NeDB({filename:'database/users.db', autoload: true})
const jwt = require('jsonwebtoken')

async function validate(body){
  const user = await users.findOne({email:body.email})
  const result = {error:false, messages:[]}
  if(user){
    result.error = true
    result.messages.push("Email already exists")
  }

  const {email,name,address,password} = body;
  
  if(!email){   result.error = true; result.messages.push("No email provided") }
  if(!password){result.error = true; result.messages.push("No password provided") }
  if(!name){    result.error = true; result.messages.push("No name provided") }
  if(!address){ result.error = true; result.messages.push("No address provided") }
  else{
    const {zip, street, city} = address
    if(!zip){     result.error = true; result.messages.push("No zip in address provided") }
    if(!street){  result.error = true; result.messages.push("No street in address provided") }
    if(!city){    result.error = true; result.messages.push("No city in address provided") }
  }
  
  return result       
}

function format(body){
  const {email,name,address,password} = body;
  const {zip,city,street} = address
  return {
      email,name,address: {zip,city,street},
      role: 'customer',
      password: bcrypt.hashSync(password, 10),
      orderHistory: []
  }
}

module.exports = {
    async create(body){
        let validation = await validate(body)
        if(!validation.error){            
            let document = format(body)
            await users.insert( document )    
        }
        return validation
    },

    async update(_id, body){
      const user = await users.findOne({_id})
      if(!user) return {error: true, message: 'User not found'}

      const patch = {
        email: body.email || user.email,
        name: body.name || user.name,
        role: user.role,
        address: body.address ? {
          street: body.address.street || user.address.street,
          city: body.address.city || user.address.city,
          zip: body.address.zip || user.address.zip,
        } : user.address,
        orderHistory: user.orderHistory,
        password: user.password
      }

      await users.update({_id}, patch)
      return {error: false}
    },
    
    async findOneBy(props){
        return await users.findOne(props)
    },

    async findOne(_id){
        return await users.findOne({_id})
    },

    async authenticate(email, password){
        if(!email || !password){
            return {error:true, message:"Invalid Credentials"}
        }
        let user = await module.exports.findOneBy({email})
        if(!user){
            return {error:true, message:"Invalid Credentials"}
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(passwordMatch){
            let token = await jwt.sign({
                id: user._id,                
                // exp: Math.floor(Date.now() / 1000) + (60 * 60)
            }, 'secret', {expiresIn: '1d'})

            const {email,name,role,address} = user
            const userData = {email,name,role,address}

            return {error:false, token, userData }
        }else{
            return {error:true, message:"Invalid Credentials"}
        }
    },

    async verifyToken(token){
        await jwt.verify(token, 'supersecret')
    },

    async addOrderToUser(order, user){
        await users.update({_id:user._id}, {$push:{orderHistory:order._id}})
    }
}
