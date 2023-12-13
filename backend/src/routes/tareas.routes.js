import express from "express"
import { deleteTareas, getOneTareas, getTareas, postTareas, putTareas } from "../controllers/tareas.js"

const router = express.Router()


router.get("/get", getTareas)
router.get("/one/:id", getOneTareas)
router.post("/post", postTareas)
router.delete("/delete/:id", deleteTareas)
router.put("/put/:id", putTareas)


export default router