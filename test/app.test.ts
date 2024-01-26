import { HealthRoute } from "@/infrastructure/api/route/health-route.js"

describe("Example", () => {
    test("Test 1", () => {
        const route = HealthRoute.getRoutes()
        expect(route).toBeDefined()
    })

    it("Test 2", () => {
        expect(true).toBeTruthy()
    })
})
