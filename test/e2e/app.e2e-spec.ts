import { buildApp } from "@/app.js"

const request = require("supertest")

const app = buildApp()

describe("E2E Testes", () => {
    test("Health", async () => {
        const response = await request(app)
            .get("/api/health")
            .expect("Content-Type", /json/)

        expect(response.status).toBe(200)
        expect(response.body).toBe("OK")
    })
})
