const TODO = require('../models/Task.js')

const getTasks = async(req,res)=>{
    try {
        const newTodo = await TODO.create(req.body)
        req.status(201).json({
            newTodo
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}