import { buildApp } from "@/app.js"

const request = require("supertest")

const app = buildApp()

request(app).get("/api/health").expect(200)
