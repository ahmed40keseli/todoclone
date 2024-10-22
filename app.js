const express = require("express"); // expres koda içe aktarım
// const bodyParser = require('body-parser'); // gelen json parsellemek için yönetmek için içe aktarım
// const mongoose = require('mongoose'); //mongodb bağlanmak için mongoose paketini içe aktarıyoruz
// const Todo = require('./models/Tasksave'); //models klasörü içindeki tasksave.js app.js ile bağlantı oluşturuyoruz
const cors = require('cors');
const dotenv = require('dotenv')
const db = require('./config/database.js'); // Connect to MongoDB
const Auth = require('./routes/auth.js')

dotenv.config();

const app = express();
app.use(cors());

// app.use(express.json()); // Middleware to parse JSON
app.use(express.json({limit:'30mb',extended:true})); //? 
app.use(express.urlencoded({limit:'30mb',extended:true})); //?

app.use('/',Auth);


// app.get('/',(req,res)=>{
//   res.json({message:"deneme deneme 123"})
// })

const PORT = process.env.PORT || 5000;

db()

// let tasks = []; // boş bir dizi oluşturmak için

// app.use('/user', UserRouter); // User routes
// app.use('/tasks', TaskRouter); // Task routes

// app.get('/api/todos', (req, res) => {
//     res.status(200).json(tasks);
//   });

//   app.post('/api/todos', (req, res) => {
//     const { title, description } = req.body;
//     const newTask = new Todo({
//       title: title,
//       description: description,
//       completed: false
//     });
//     newTask.save()
//       .then((result)=>(
//         res.send(result) 
//       ))
//       .catch((err)=>{
//         console.log(err);
//       })
//   });


//   app.put('/api/todos/:id', (req, res) => {
//     const { id } = req.params;
//     const { title, description, completed } = req.body;
//     const task = tasks.find(t => t.id === parseInt(id));
  
//     if (task) {
//       task.title = title;
//       task.description = description;
//       task.completed = completed;
//       res.status(200).json(task);
//     } else {
//       res.status(404).json({ message: 'Task not found' });
//     }
//   });

//   app.delete('/api/todos/:id', (req, res) => {
//     const { id } = req.params;
//     const initialLength = tasks.length;
//     tasks = tasks.filter(t => t.id !== parseInt(id));
  
//     if (tasks.length < initialLength) {
//       res.status(200).json({ message: 'Task deleted' });
//     } else {
//       res.status(404).json({ message: 'Task not found' });
//     }
//   });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
