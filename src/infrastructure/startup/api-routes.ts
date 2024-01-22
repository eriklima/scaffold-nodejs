import express, { Router } from "express"
import { HealthRoute } from "../api/route/health-route.js"

export abstract class ApiRoutes {
    static getRoutes() {
        const router = Router()

        router.use("/health", HealthRoute.getRoutes())

        return router
    }
}
