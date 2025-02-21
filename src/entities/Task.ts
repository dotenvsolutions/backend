import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BaseEntity , ManyToOne} from "typeorm";
import { User } from "./User";
@Entity()
 
export class Task extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column({ type: 'enum', enum: ['Alta', 'Media', 'Baja'],default: "Alta" })
    priority: string

    @Column({ type: 'date' })
    dueDate: Date

    @Column({ type: 'boolean' })
    isCompleted: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updateAt: Date

    @ManyToOne(() => User, (user) => user.id)
    user: User
}