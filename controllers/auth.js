const Auth = require('../models/User.js')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async(req,res) => { // async = asenkron olmasını sağlar 
    try {
        const {username,email,password} = req.body // dışarıdan req beklediğimiz değerler
        const user = await Auth.findOne({email}) // await bekleme anlamaında data içindeki emaili karşılaştırır

        if(user){
            return res.status(500).json({message: 'bu hesap zaten var'})
        }

        if(password.lenght < 6){
            return res.status(500).json({message:"parolaniz 6 haneden fazla olmali"})
        }

        const passwordHash = await bcrypt.hash(password,12)

        const newUser = await Auth.create({username,email,password:passwordHash})

        const userToken =  jwt.sign({id:newUser.id}, process.env.SECRET_TOKEN,{expiresIn:'1h'});

        res.status(201).json({
            status: "OK",
            newUserUser,
            userToken
        })

    }catch (error) {
        return res.status(500).json({message:error.message})    
    }
}

const login = async(req,res) =>{
 try {
    const {email,password} = req.body ;
    const user = await Auth.findOne({email});
    if(!user){
        return res.status(500).json({message: "bu hesap zaten kayitli"})
    }
    const comparePassword = await bcrypt.compare(password,user.password)
    if(!comparePassword){
        return res.status(500).json({message: "bu parola hatali"})
    }

    const token =  jwt.sign({id: user.id}, process.env.SECRET_TOKEN,{expiresIn:'1h'})

    res.status(200).json({
        status: "OK",
        user,
        token
    })


 } catch (error) {
    return res.status(500).json({message:error.message})
 }   
}

module.exports = {register,login}