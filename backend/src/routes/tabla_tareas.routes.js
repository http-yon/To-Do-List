import express from "express"
import { deleteTablaTareas, getOneTablaTareas, getTablaTareas, postTablaTareas, putTablaTareas } from "../controllers/tabla_tareas.js"

const router = express.Router()

router.get("/get",getTablaTareas)
router.get("/one/:id",getOneTablaTareas)
router.post("/post",postTablaTareas)
router.delete("/delete/:id",deleteTablaTareas)
router.put("/put/:id",putTablaTareas)

export default router