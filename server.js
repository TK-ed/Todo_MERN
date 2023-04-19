// importing the libraries

import * as dotenv from 'dotenv'
dotenv.config()
import Express from "express";
import todoRouter from './Routes/todoRoute.js'
import mongoose from "mongoose";

const app = Express()

// middlewares
app.use('/todos', todoRouter)

// dotenv declarations
const port = process.env.PORT
const db = process.env.MONG_URI

// testing
app.get('/', (req, res) => {
    res.send('Haiiyyyaa')
})

// connecting
mongoose.connect(db)
    .then( () => {
        
        try {

            app.listen(port, () => {
                console.log(`Connected to DB and listenin' on ${port}`)
            })

        } catch(err) {
            res.send(err)
        }

    })