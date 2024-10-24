const Auth = require('../models/User.js')//giriş işlemleri için kişi taslaği
const bcrypt = require('bcryptjs');//bcrypt:parolaları güvenli bir şekilde karıştırmak için
const jwt = require('jsonwebtoken');

const register = async(req,res) => { // async = asenkron olmasını sağlar, kayıt işlemleri için
    try {
        const {username,email,password} = req.body // dışarıdan req beklediğimiz değerler
        const user = await Auth.findOne({email}) // await bekleme anlamaında data içindeki emaili karşılaştırır

        if(user){
            return res.status(500).json({message: 'bu hesap zaten var'})
        }

        if(password.lenght < 6){ // altı karakterden fazla olması için
            return res.status(500).json({message:"parolaniz 6 haneden fazla olmali"})
        }

        const passwordHash = await bcrypt.hash(password,12)

        const newUser = await Auth.create({username,email,password:passwordHash})//yeni kayıt işlemini gerçekleştirir

        const userToken =  jwt.sign({id:newUser.id}, process.env.SECRET_TOKEN,{expiresIn:'1h'});//parolayı şifreler

        res.status(201).json({ // true dönen değerlerin içeriği 
            status: "OK",
            newUser,
            userToken
        })

    }catch (error) {
        return res.status(500).json({message: error.message})//hata mesajı içeriği vs.    
    }
}

const login = async(req,res) =>{ // async: a senkron olmasını sağlar, giriş işlemleri için kullanılır
 try {
    const {email,password} = req.body ; // kullanıcıdan gelen cevaplar 
    const user = await Auth.findOne({email});//gelen email databasede findone ile bulunmaya çalışır
    if(!user){ // email databasede olmadığı zaman 
        return res.status(500).json({message: "boyle bir kullanici bulunamadis"})//döneceği yanıt
    }
    const comparePassword = await bcrypt.compare(password,user.password)
    //kullanıcıdan gelen password ile user altındaki password karşılaştırılır 
    if(!comparePassword){
        return res.status(500).json({message: "bu parola hatali"})
    }

    const token =  jwt.sign({id: user.id}, process.env.SECRET_TOKEN,{expiresIn:'1h'}) 
    // id içine user altındaki id atanır

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