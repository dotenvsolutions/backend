import "reflect-metadata"
import app from "@server/server"
import dotenv from 'dotenv'
import { AppDataSource } from "db/database"
dotenv.config()

async function main() {
    try {
        await AppDataSource.initialize()
        console.log("database conected")
        const port = process.env.SERVER_PORT
        app.listen(port, () => {
            console.log(`Server is on por ${port}`)
        })
    } catch (error) {
        console.log(`database conexion error:${error}`)
    }
}
main()
//console.log(process.env)


