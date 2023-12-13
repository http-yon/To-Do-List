import express from "express"
import { getUsuarios, getOneUsuario, postUsuarios, deleteUsuario, putUsuario } from "../controllers/usuarios.js"

const router = express.Router()


router.get("/get",getUsuarios)
router.get("/one/:id",getOneUsuario)
router.post("/post",postUsuarios)
router.delete("/delete/:id",deleteUsuario)
router.put("/put/:id",putUsuario)

export default router

