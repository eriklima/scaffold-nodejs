import express from "express"
import { ApiRoutes } from "./infrastructure/startup/api-routes.js"

const app = express()
const port = process.env.PORT || 3000

app.use("/api", ApiRoutes.getRoutes())

app.listen(port, () => {
    console.log("Server listening...")
})
