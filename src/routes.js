const express = require("express")
const router = express.Router()
const userController = require("./controllers/userController")
const loginController = require("./controllers/loginController")
const auth = require("./middlewares/auth")

router.get("/users", userController.findAll)
router.post("/user", userController.create)
router.patch("/user/:id", userController.update)
router.delete("/user/:id", userController.delete)
router.get("/user/:id", auth, userController.findOne)

router.post("/login", loginController.login)


module.exports = router

