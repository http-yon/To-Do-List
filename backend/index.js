import dotenv from "dotenv"
import express from "express"
import tareaRouter from "./src/routes/tareas.routes.js"
import usuarioRouter from "./src/routes/usuario.routes.js"
import proyectoRouter from "./src/routes/proyectos.routes.js"


dotenv.config()
const app = express()


//parsear a json
app.use(express.json())
app.use("/tareas",tareaRouter)
app.use("/usuarios",usuarioRouter)
app.use("/proyectos",proyectoRouter)



//server localhost
app.listen(process.env.PORT, () => {
    try {
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
        console.log("error de servidor");

    }
})


