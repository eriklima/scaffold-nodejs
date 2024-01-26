import express from "express"
import { ApiRoutes } from "./infrastructure/startup/api-routes.js"

const app = express()

export function buildApp() {
    app.use("/api", ApiRoutes.getRoutes())

    return app
}
