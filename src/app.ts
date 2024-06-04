import express from "express"
import configConstants from "./constants/config.constants"


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(configConstants.PORT, () => {
    console.log(`Server started on port: ${configConstants.PORT}`);
})