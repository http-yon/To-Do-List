import express from "express"
import { deleteCategorias, getCategorias, getOneCategorias, postCategorias, putCategorias } from "../controllers/categorias.js"

const router = express.Router()


router.get("/get",getCategorias)
router.get("/one/:id",getOneCategorias)
router.post("/post",postCategorias)
router.delete("/delete/:id",deleteCategorias)
router.put("/put/:id",putCategorias)

export default router