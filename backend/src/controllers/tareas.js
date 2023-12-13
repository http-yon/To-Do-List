import mysqlConexion from "../database/dbCnx.js";
import dotenv from "dotenv"
dotenv.config()


//get
const getTareas = (req, res) => {
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
}


//getOne
const getOneTareas = (req,res)=>{
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
}


//post
const postTareas = (req, res) => {
    try {

        const { estado, descripcion, id_tabla_tareas } = req.body
        const dbCnx = mysqlConexion();

        dbCnx.query(`INSERT INTO tareas (descripcion,estado,id_tabla_tareas) VALUES ('${descripcion}','${estado}','${id_tabla_tareas}')`, (err, response) => {
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
}


//delete
const deleteTareas = (req,res)=>{
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
}


//put
const putTareas = (req,res)=>{
    try {

        const {id} = req.params
        const {estado,descripcion,id_tabla_tareas} = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE tareas SET estado = '${estado}', descripcion = '${descripcion}', id_tabla_tareas = '${id_tabla_tareas}' where id=${id}`,(err,response)=>{
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
}


export {
    getTareas,
    getOneTareas,
    postTareas,
    deleteTareas,
    putTareas
};