import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Task } from "./Task";
@Entity()
 
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 80 })
    name: string

    @Column("varchar", { length: 100 })
    lastname: string

    @Column("varchar", { length: 200 })
    nickname: string

    @Column("varchar", { length: 180 })
    password: string

    @Column("varchar", { length: 250 })
    email: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @OneToMany(() => Task, (task) => task.user)
    tasks: Task[]
}