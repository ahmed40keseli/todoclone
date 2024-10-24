const express = require("express");
const {getTasks, creatTask, detailTasks, updateTask, deleteTask} = require('../controllers/Task.js');

const router = express.Router();

router.get('/getTasks', getTasks)
router.post('/creatTask', creatTask)
router.get('/detailTasks/:id', detailTasks)
router.put('/updateTask/:id', updateTask)
router.delete('/deleteTask/:id', deleteTask)


module.exports = router