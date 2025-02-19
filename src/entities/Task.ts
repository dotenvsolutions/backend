import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity()
 
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'enum', enum: ['Alta', 'Media', 'Baja'] })
    priority: string

    @Column({ type: 'date' })
    dueDate: Date

    @Column({ type: 'boolean' })
    isCompleted: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date
}