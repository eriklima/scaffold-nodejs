import { Router } from "express"
import { HealthController } from "../controller/health-controller.js"

export abstract class HealthRoute {
    static getRoutes() {
        const router = Router()

        router.route("/").get(HealthController.ok()).head(HealthController.ok())

        return router
    }
}
