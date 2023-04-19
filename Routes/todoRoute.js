// importing libs
import express from "express";
import { createTodo } from "../Controllers/todoController.js";
const router = express.Router()

// routes
router.post('/', createTodo)

export default router