import { ITaskRepository, Task } from "types/TaskTypes";
import { Task as TaskEntity } from "@entites/Task";
export class TaskRepository implements ITaskRepository {
    private task: Task[] = []
    
    async create(data: Task): Promise<Task>{
        const taskCreate = new TaskEntity()
        taskCreate.title = data.title;
        taskCreate.description = data.description
        taskCreate.priority = data.priority
        taskCreate.dueDate = data.dueDate
        taskCreate.isCompleted = data.isCompleted
        await taskCreate.save()
        return data;
    }

    async get(): Promise<any[]> {
        this.task = await TaskEntity.find()
        
        return this.task.map((v)=>({id:v.id,title:v.title,description:v.description,priority:v.priority,dueDate:v.dueDate,isComplete:v.isCompleted}));
    }

    async show(id: number): Promise<Task> {
        this.task = await TaskEntity.findOneBy({id: id})
        return this.task
    }

    async update(id: number, data: Task): Promise<Task | null> {
         const task = await TaskEntity.findOneBy({id: id})
        task.title = data.title
        task.description = data.description
        task.priority = data.priority
        task.dueDate = data.dueDate
        task.isCompleted = data.isCompleted
        await task.save()
        return data
    }

    async delete(id: number): Promise<boolean> {
        const response = await TaskEntity.delete({id: id})
        if(response)
            return true;
        else
            return false
    }
}