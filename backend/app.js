import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import tasksRouter from './routes/tasksRouter.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

//manejo del json en los req
app.use(express.json())


//conecta a la db de Mongo
connectDB()

//las rutas
app.use('/api/v1/tasks', tasksRouter)

//server escuchando

app.listen(PORT, ()=>{
    console.log(`App listen on port ${PORT}`)
})

