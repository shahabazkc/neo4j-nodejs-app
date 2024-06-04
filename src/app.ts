import 'module-alias/register'
import express from "express"
import configConstants from "./constants/config.constants"
import userRouter from "./routes/user.router"
import handleNotFound from "./utils/handlers/apiNotFound.handler"
import errorConverter from "./middlewares/error-converter.middleware"
import errorMiddleware from "./middlewares/error.middleware"
import { connectNeo4jDb } from './config/db/neo4j.db.connector'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRouter);

app.use(handleNotFound)

app.use(errorConverter)
app.use(errorMiddleware)

app.listen(configConstants.PORT, () => {
    console.log(`Server started on port: ${configConstants.PORT}`);
    connectNeo4jDb()
})