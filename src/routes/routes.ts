 
import {Request, Response, NextFunction, Router} from 'express'
import taskController from '@controllers/task.controller';
import { TaskService } from '../servicies/TaskService';
import { TaskRepository } from './../repositories/TaskRepository';
const taskRepository: TaskRepository = new TaskRepository()
const taskService: TaskService = new TaskService(taskRepository)

import { Task } from '@entites/Task';

const router = Router()

export default () => {
    router.get("/health", (req, res) => {
        res.json("Api Works")
    })

    router.get("/", async(req: Request, res: Response)  =>  {
        const response = await taskService.getTask()
        res.json(response)
    }) 

    router.post("/",async (req: Request, res: Response)  => {
        const { title, description, priority, dueDate, isCompleted} = req.body
        const data = {title, description, priority, dueDate, isCompleted}
        const response = await taskService.createTask(data)
        res.json(response)
    } )

    router.put("/:id",async(req: Request, res: Response)  => {
        const  { title, description, priority, dueDate, isCompleted} = req.body
        const data = {title, description, priority, dueDate, isCompleted}
        const response = await taskService.updateTaskById(req.params.id, data)
        res.json(response)
    })
    
    return router;
}