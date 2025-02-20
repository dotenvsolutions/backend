import { ITaskRepository, Task } from "types/TaskTypes";
import { Task as TaskEntity } from "@entites/Task";
import { AppDataSource, } from "db/database";
import { QueryRunner } from "typeorm";
export class TaskRepository implements ITaskRepository {
    private task: Task[] = []
    
    async create(data: Task): Promise<Task>{
       // const dataSource = getDataSource();
        const queryRunner: QueryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const taskCreate = new TaskEntity()
            taskCreate.title = data.title;
            taskCreate.description = data.description
            taskCreate.priority = data.priority
            taskCreate.dueDate = data.dueDate
            taskCreate.isCompleted = data.isCompleted
            await queryRunner.manager.save(taskCreate)
            if (!taskCreate.id) throw new Error("Error en la inserción");
            await queryRunner.commitTransaction();
            console.log("Usuario guardado con éxito");
        } catch (error) {
            await queryRunner.rollbackTransaction();
            console.error("Error en la transacción:", error);
        }finally {
            await queryRunner.release();  
        }
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
        const queryRunner: QueryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            task.title = data.title;
            task.description = data.description
            task.priority = data.priority
            task.dueDate = data.dueDate
            task.isCompleted = data.isCompleted
            await queryRunner.manager.save(task)
            
            await queryRunner.commitTransaction();
            
        } catch (error) {
            await queryRunner.rollbackTransaction();
            
        }finally {
            await queryRunner.release();  
        }
        return data
    }

    async delete(id: number): Promise<boolean> {
        const response = await TaskEntity.delete({id: id})
        const queryRunner: QueryRunner = AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.delete(TaskEntity,{id})
            await queryRunner.commitTransaction();
        } catch (error) {
            await queryRunner.rollbackTransaction();
        }finally {
            await queryRunner.release();  
        }
        if(response)
            return true;
        else
            return false
    }
}