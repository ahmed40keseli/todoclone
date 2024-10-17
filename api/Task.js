const express = require('express');
const router = express.Router();
const Todo = require('../models/Tasksave');

app.get('/api/todos', (req, res) => {
    res.status(200).json(tasks);
  });

  app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;
    const newTask = new Todo({
      title: title,
      description: description,
      completed: false
    });
    newTask.save()
      .then((result)=>(
        res.send(result) 
      ))
      .catch((err)=>{
        console.log(err);
      })
  });


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


  module.exports = router;





  // api/Task.js
// const express = require('express');
// const router = express.Router();
// const Todo = require('../models/Tasksave'); // Import the Todo model

// // POST: Create a new task
// router.post('/', async (req, res) => {
//   const { title, description } = req.body;
//   try {
//     const newTask = new Todo({ title, description, completed: false });
//     const savedTask = await newTask.save();
//     res.status(201).json(savedTask);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to create task" });
//   }
// });

// // GET: Retrieve all tasks
// router.get('/', async (req, res) => {
//   try {
//     const tasks = await Todo.find();
//     res.status(200).json(tasks);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve tasks" });
//   }
// });

// // PUT: Update a task by ID
// router.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, description, completed } = req.body;
//   try {
//     const updatedTask = await Todo.findByIdAndUpdate(
//       id,
//       { title, description, completed },
//       { new: true }
//     );
//     if (!updatedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json(updatedTask);
//   } catch (error) {
//     res.status(500).json({ message: "Failed to update task" });
//   }
// });

// // DELETE: Delete a task by ID
// router.delete('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedTask = await Todo.findByIdAndDelete(id);
//     if (!deletedTask) {
//       return res.status(404).json({ message: "Task not found" });
//     }
//     res.status(200).json({ message: "Task deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to delete task" });
//   }
// });

// module.exports = router; // Export the router
