import { ITaskRepository, Task } from '../types/TaskTypes';
import { ITaskService } from "types/TaskTypes";

export class TaskService implements ITaskService {
    private taskRepository: ITaskRepository

    constructor(taskRepository: ITaskRepository){
        this.taskRepository = taskRepository
    }

    async createTask(task: Task): Promise<Task> {
        return this.taskRepository.create(task)
    }

    async getTask(): Promise<Task[]> {
        return await this.taskRepository.get()
    }

    async findTaskById(id: number): Promise<Task> {
        return this.taskRepository.show(id)
    }

    async updateTaskById(id: number, task: Partial<Task>): Promise<Task | null> {
        return this.taskRepository.update(id, task)
    }

    async delateTaskById(id: number): Promise<boolean> {
        return this.taskRepository.delete(id)
    }
}