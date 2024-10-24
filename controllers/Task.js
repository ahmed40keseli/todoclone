const Todom = require('../models/Task.js')
const TodoSchema = require('../models/Task.js')

const creatTask= async(req,res)=>{
    try {
        const newTask = await Todom.create(req.body)
        req.status(201).json({
            newTask
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
        // return res.status(500).json({message: "createtask deneme"})
    }
}

const getTasks = async(req,res)=>{
    try {
        const getTasks = await TODO.find()
        req.status(201).json({
            getTasks
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const detailTasks = async(req,res)=>{
    try {
        const {id} = req.params;
        const detailTasks = await TODO.findById(id)
        req.status(200).json({
            detailTasks
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const updateTask = async(req,res)=>{
    try {
        const {id} = req.params;
        const updateTask = await TODO.findByIdAndUpdate(id, req.body, {new:true})
        req.status(201).json({
            updateTask
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const deleteTask = async(req,res)=>{
    try {
        const {id} = req.params;
        await TODO.findByAndRemove(req.body)
        req.status(201).json({
            message:"silme isleminiz basari ile gerceklesti"
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {creatTask, getTasks, detailTasks, updateTask, deleteTask}