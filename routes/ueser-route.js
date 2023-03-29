const express = require("express")

const router = express.Router()
const {registerUser, loginUser} = require("../controllers/user-controller")

router.get("/", registerUser)

router.get('/login', loginUser)

module.exports = router;