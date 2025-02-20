import express, {Application} from "express";
import routes from "@routes/task.routes";
import morgan from "morgan";
import cors from 'cors'
import helmet from "helmet";
const app: Application = express()

app.use(express.json({ limit: '500mb' }));
app.use(cors())
app.use(helmet())
app.use(morgan("dev"));

// Routes 
app.use("/api/v1", routes())

export default app;