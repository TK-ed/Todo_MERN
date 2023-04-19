import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    done: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

const Todo = new model("todos", todoSchema);
export default Todo;