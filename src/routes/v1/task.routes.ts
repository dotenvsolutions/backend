 
import {Request, Response, NextFunction, Router} from 'express'
import { TaskService } from '../../servicies/TaskService';
import { TaskRepository } from '../../repositories/TaskRepository';
import { validateRequest } from '@middlewares/middleware';
import {formSchema} from '@validations/task.validator'
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

    router.post("/create", async (req: Request, res: Response)  => {
        const { title, description, priority, dueDate, isCompleted} = req.body
        const data = {title, description, priority, dueDate, isCompleted}
        const response = await taskService.createTask(data)
        res.json(response)
    } )

    router.put("/upd/:id",async(req: Request, res: Response)  => {
        const  { title, description, priority, dueDate, isCompleted} = req.body
        const data = {title, description, priority, dueDate, isCompleted}
        const response = await taskService.updateTaskById(parseInt(req.params.id), data)
        res.json(response)
    })

    router.delete("/del/:id",async(req: Request, res: Response)  => {
        const response = await taskService.delateTaskById(parseInt(req.params.id))
        if(response){
            res.json({'msg':"Eliminado con exito"})
        }else{
            res.json({'msg': "No se ha podido eliminar"})
        }
    })
    
    return router;
}