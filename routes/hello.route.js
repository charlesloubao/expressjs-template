const express = require("express")
const router = express.Router()

router.get("/api/hello", ((req, res, next) => res.send({message: "Hello world"})))

module.exports = router
