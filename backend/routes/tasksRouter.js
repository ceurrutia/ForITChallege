import express from 'express'
import { Task } from '../model/taskModel.js'

const router = express.Router()

//creo ruta inicial asincrona
router.get('/',async (request, response)=>{
    try{
        const tasks = await Task.find()
        response.status(200).json(tasks)
    } catch(error){
        response.status(500).json({message: 'Error fetching, ohh no!', error: error.message})
    }
    
})

export default router
