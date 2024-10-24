const mongoose = require("mongoose");


const db = () => {
  mongoose.connect(process.env.dbURL,).then(()=>{ // dbURL env dosyasında mongodb urlsidir mongodb ile bağlantı kurulur
    console.log('baglandi')
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = db 