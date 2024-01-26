import express from "express"

export abstract class HealthController {
    static ok() {
        return (req: express.Request, res: express.Response) => {
            res.json("OK")
        }
    }
}
