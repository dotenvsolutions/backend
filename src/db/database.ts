import "reflect-metadata"
import { DataSource } from "typeorm"
import { Task } from "@entites/Task"
import dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5430,
    username:  process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [Task],
    subscribers: [],
    migrations: [],
})

 