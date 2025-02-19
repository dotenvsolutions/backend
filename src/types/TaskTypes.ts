import { RepositoryType } from "./RepositoryTypes";

export interface Task {
    id?: number; 
    title: string;
    description:string;
    priority:string;
    dueDate: Date;
    isCompleted: boolean,
    createdAt?: Date,
    updateAt?: Date
}

export interface ITaskRepository extends RepositoryType<Task> {

}

export interface ITaskService {
    createTask(task: Task): Promise<Task>
    getTask(): Promise<Task[]>
    findTaskById(id: number): Promise<Task>
    updateTaskById(id: number, task:Partial<Task>): Promise<Task | null>
    delateTaskById(id:number): Promise<boolean>
}