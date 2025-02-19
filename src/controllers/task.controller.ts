import { Request,Response } from "express";
import { TaskService } from '../servicies/TaskService';
import { TaskRepository } from './../repositories/TaskRepository';

const taskRepository: TaskRepository = new TaskRepository()
const taskService: TaskService = new TaskService(taskRepository)

const taskController = {
    listTasks: async (req: Request, res: Response) => {
        const task = await taskService.getTask()
        res.json(task)
    },
    createTask: async (req: Request, res: Response) => {
        try {
            console.log(req.body)
            /* const { title, description, priority, dueDate, isCompleted} = req.body
            const data = {title, description, priority, dueDate, isCompleted}
            const response = await taskService.createTask(data)
            res.json(response) */
        } catch (error) {
            console.log(error)
        }   
    }
}

export default taskController;