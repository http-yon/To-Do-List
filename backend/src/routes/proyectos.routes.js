import express from "express"
import { deleteProyectos, getOneProyectos, getProyectos, postProyectos, putProyectos } from "../controllers/proyectos.js"

const router = express.Router()


router.get("/get",getProyectos)
router.get("/one/:id",getOneProyectos)
router.post("/post",postProyectos)
router.delete("/delete/:id",deleteProyectos)
router.put("/put/:id",putProyectos)

export default router