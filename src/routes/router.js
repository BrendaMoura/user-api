import pkg from "express"
import UserController from "../controllers/usuario.js"
const { express } = pkg
const Router = express.Router()

export const router = Router()

router.get("/users", UserController.index)

router.post("/user", UserController.create)

router.put("/user/:login", UserController.update)

router.get("/user/:login", UserController.findByLogin)

router.get("/user/:login", UserController.delete)
