const express = require("express");
// expres koda içe aktarım
const bodyParser = require('body-parser');
// gelen json parsellemek için yönetmek için içe aktarım
const mongoose = require('mongoose');
const Todo = require('./models.js');  


const app = express();

const dbURL = 'mongodb+srv://krkkseli:asd123@todoclone.ghhoy.mongodb.net/?retryWrites=true&w=majority&appName=TodoClone';
mongoose.connect(dbURL, {useNewUrlParser: true,useUnifiedTopology:true})
  .then((result)=>  app.listen(3000))
  .catch((err)=>('eror'))


// const PORT = 3000;
// local port adresini belirleme
app.use(bodyParser.json());
// json olduğunu belirtmek için


let tasks = [];
// boş bir dizi oluşturmak için


app.get('/api/todos', (req, res) => {

    res.status(200).json(tasks);
  });

  app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    const newTask = new Todo({
      title: title,
    //   göreve başlık eklmek için
      description: description,
    //   görevin açıklaması
      completed: false
    //   görevin yapılıp yapılmadığı
    });
    newTask.save()
      .then((result)=>(
        res.send(result) 
      ))
      .catch((err)=>{
        console.log(err);
      })
    // tasks.push(newTask);
    // boş dizinin içine aktarır
    // res.status(201).json(newTask);
  });


// app.post('/api/todos', (req, res) => {
//     const { title, description } = req.body;
//     const newTask = {
//       id: tasks.length + 1,
//     //   sırayla otomatik artırmak için
//       title: title,
//     //   göreve başlık eklmek için
//       description: description,
//     //   görevin açıklaması
//       completed: false
//     //   görevin yapılıp yapılmadığı
//     };
//     tasks.push(newTask);
//     // boş dizinin içine aktarır
//     res.status(201).json(newTask);
//   });

  app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = tasks.find(t => t.id === parseInt(id));
  
    if (task) {
      task.title = title;
      task.description = description;
      task.completed = completed;
      res.status(200).json(task);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });

  app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== parseInt(id));
  
    if (tasks.length < initialLength) {
      res.status(200).json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  });


//   app.listen(PORT,function(){
//     console.log("server in started at port" + PORT );
// });
