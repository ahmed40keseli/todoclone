const mongoose = require("mongoose");


const db = () => {
  mongoose.connect(process.env.dbURL,).then(()=>{
    console.log('baglandi')
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = db 