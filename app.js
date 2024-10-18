const express = require("express"); // expres koda içe aktarım
const bodyParser = require('body-parser'); // gelen json parsellemek için yönetmek için içe aktarım
const mongoose = require('mongoose'); //mongodb bağlanmak için mongoose paketini içe aktarıyoruz
const Todo = require('./models/Tasksave'); //models klasörü içindeki tasksave.js app.js ile bağlantı oluşturuyoruz
require('./config/db'); // Connect to MongoDB

const app = express();
const port = 3000;

const UserRouter = require('./api/User');
const TaskRouter = require('./api/Task'); // Import Task routes

app.use(express.json()); // Middleware to parse JSON



// const app = express();


// const dbURL = 'mongodb+srv://krkkseli:asd123@todoclone.ghhoy.mongodb.net/?retryWrites=true&w=majority&appName=TodoClone';
// mongoose.connect(dbURL, {useNewUrlParser: true,useUnifiedTopology:true})
//   .then((result)=>  app.listen(3000))
//   .catch((err)=>('eror'))


// app.use(bodyParser.json()); // json olduğunu belirtmek için


let tasks = []; // boş bir dizi oluşturmak için

app.use('/user', UserRouter); // User routes
app.use('/tasks', TaskRouter); // Task routes

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
