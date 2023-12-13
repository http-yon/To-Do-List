import express from "express"
import { deleteIconos, getIconos, getOneIconos, postIconos, putIconos } from "../controllers/iconos.js"

const router = express.Router()


router.get("/get",getIconos)
router.get("/one/:id",getOneIconos)
router.post("/post",postIconos)
router.delete("/delete/:id",deleteIconos)
router.put("/put/:id",putIconos)

export default router