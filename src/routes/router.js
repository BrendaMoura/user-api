import UserController from "../controllers/usuario.js"

import express from "express";
const router = express.Router()

router.get("/users", UserController.findAll)

router.post("/user", UserController.create)

router.put("/user/:login", UserController.update)

router.get("/user/:login", UserController.findByLogin)

router.delete("/user/:login", UserController.delete)

export default router
