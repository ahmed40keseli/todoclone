// require('dotenv').config();
const mongoose = require("mongoose");


const db = () => {
  mongoose.connect(process.env.dbURL,).then(()=>{
    console.log('baglandi')
  }).catch((err)=>{
    console.log(err)
  })
}

module.exports = db 


// mongoose
//   .connect(process.env.dbURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((err) => console.log(err));