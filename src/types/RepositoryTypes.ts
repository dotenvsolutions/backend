import { Task } from 'types/TaskTypes';
export interface RepositoryType<T = undefined> {
    create(data: T): Promise<T>;
    get(): Promise<T[]>
    show(id: number): Promise<T | null>;
    delete(id: number): Promise<boolean>;
    update(id: number, task: Partial<Task>): Promise<T | null>;
}