import express from "express";
import mysqlConexion from "../database/dbCnx.js";
import dotenv from "dotenv"
dotenv.config()

const router = express.Router();

//get
router.get("/get", (req, res) => {
    try {

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM tareas`, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query get")
            } else {
                console.log(response);
                res.json(response)
            }
        })

    } catch (error) {
        console.log(error);
        res.json("error en query");
    }
})



router.get("/one/:id",(req,res)=>{
    try {

        const {id} = req.params

        const dbCnx = mysqlConexion()
        
        dbCnx.query(`SELECT * from tareas where id= ${id}`,(err,response)=>{
            if (err) {
                console.log(err);
                res.json("error en query get one")
            }else{
                console.log(response);
                res.json(response)
            }
        })
        
    } catch (error) {
        console.log(error);
        res.json("error en query")
    }
})


//post
router.post("/post", (req, res) => {
    try {

        const { titulo, descripcion } = req.body
        const dbCnx = mysqlConexion();

        dbCnx.query(`INSERT INTO tareas (titulo,descripcion) VALUES ('${titulo}','${descripcion}')`, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query");
            } else {
                console.log(response);
                res.send(response);
            }
        });
    } catch (error) {
        console.log(error);
        res.json("error en query");
    }
});


//delete
router.delete("/delete/:id",(req,res)=>{
    try {

        const {id} = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM tareas WHERE id = ${id} `, (err,response)=>{
            if(err){
                console.log(err);
                res.json("error en query delete")
            }else{
                console.log(response)
                res.json(response)
            }
        })

    } catch (error) {
        console.log(error);
        res.json("error en query")
    }
})


//put
router.put("/put/:id",(req,res)=>{
    try {

        const {id} = req.params
        const {titulo,descripcion} = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE tareas SET titulo = '${titulo}', descripcion = '${descripcion}' where id=${id}`,(err,response)=>{
            if (err) {
                console.log(err);
                res.json("error en query put")
            } else{
                console.log(response);
                res.json(response)
            }
        })
        
    } catch (error) {
        console.log(error);
        res.json("error en query")

    }
})


export default router;