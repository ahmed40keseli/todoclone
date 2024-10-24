const express = require("express"); // expres koda içe aktarım
const cors = require('cors');
const dotenv = require('dotenv')
const db = require('./config/database.js'); // Connect to MongoDB
const Auth = require('./routes/auth.js')
const Task = require('./routes/Task.js');


dotenv.config();

const app = express();
app.use(cors());

// app.use(express.json()); // Middleware to parse JSON
app.use(express.json({limit:'30mb',extended:true})) //? 
app.use(express.urlencoded({limit:'30mb',extended:true})) //?

app.use('/',Auth)
app.use('/',Task)


// app.get('/',(req,res)=>{
//   res.json({message:"deneme deneme 123"})
// })

const PORT = process.env.PORT || 5000;

db()


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
