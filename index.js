const port = process.env.PORT || 3000
const express = require("express")

const routes = require("./routes")

const app = express()
app.use(routes)

app.listen(port, () => console.log("Listening on port", port))
