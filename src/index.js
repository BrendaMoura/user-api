import router from "./routes/router.js"

import express from "express";
const app = express();

const PORT = 9000

app.use(express.json())
app.use(router)

app.listen(PORT, () => console.log(`Server is running at ${PORT}.`))
