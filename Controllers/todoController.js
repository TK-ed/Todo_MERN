import Todo from '../Models/todoModel.js'
import mongoose from 'mongoose'

// Create
export const createTodo = async (req, res) => {
    
    try {

        const { name } = req.body

        // throw errors
        if(!body) {
            throw new Error('Todo is required') ;
        }

        const todo = await Todo.create()



    } catch(err) {
        res.send(err)
    }


}