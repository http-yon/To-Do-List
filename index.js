import dotenv from "dotenv"
import express from "express"
import router from "./src/routes/tareas.routes.js"


dotenv.config()
const app = express()


//parsear a json
app.use(express.json())
app.use("/query",router)



//server localhost
app.listen(process.env.PORT, () => {
    try {
        console.log(`server running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
        console.log("error de servidor");

    }
})


