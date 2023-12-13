import express from "express"

const router = express.Router()
import { deleteFondos, getFondos, getOneFondos, postFondos, putFondos } from "../controllers/fondos.js"

router.get("/get",getFondos)
router.get("/one/:id",getOneFondos)
router.post("/post",postFondos)
router.delete("/delete/:id",deleteFondos)
router.put("/put/:id",putFondos)

export default router