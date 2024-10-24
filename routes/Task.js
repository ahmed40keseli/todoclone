const express = require("express");
const {getTasks, creatTask, detailTask, updateTask, deleteTask} = require('../controllers/Task.js');

const router = express.Router();

router.get('/getTasks', getTasks)
router.post('/creatTask', creatTask)
router.get('/detailTask/:id', detailTask)
router.put('/updateTask/:id', updateTask)
router.delete('/deleteTask/:id', deleteTask)


module.exports = router