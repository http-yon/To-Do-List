import dotenv from "dotenv"
import express from "express"

import categoriaRouter from "./src/routes/categorias.routes.js"
import fondosRouter from "./src/routes/fondos.routes.js"
import iconosRouter from "./src/routes/iconos.routes.js"
import proyectosRouter from "./src/routes/proyectos.routes.js"
import tabla_tareasRouter from "./src/routes/tabla_tareas.routes.js"
import tareaRouter from "./src/routes/tareas.routes.js"
import usuarioRouter from "./src/routes/usuario.routes.js"
//import categoria_tareasRouter from "./src/routes/categoria_tareas.routes.js"


dotenv.config()
const app = express()


//parsear a json
app.use(express.json())
//app.use("/categoriasTareas",categoria_tareasRouter)
app.use("/categorias",categoriaRouter)
app.use("/fondos",fondosRouter)
app.use("/iconos",iconosRouter)
app.use("/proyectos",proyectosRouter)
app.use("/tablaTareas",tabla_tareasRouter)
app.use("/tareas",tareaRouter)
app.use("/usuarios",usuarioRouter)



//server localhost
app.listen(process.env.PORT, () => {
    try {
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
        console.log("error de servidor");

    }
})


