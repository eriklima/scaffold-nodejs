import { buildApp } from "./app.js"

const port = process.env.PORT || 3000

const app = buildApp()

app.listen(port, () => {
    console.log("Server listening...")
})
