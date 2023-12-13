import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getProyectos = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM proyectos`, (err, response) => {
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
        res.json("error en query")
    }
}


//get One
const getOneProyectos = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM proyectos WHERE id= ${id}`, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query get one")
            } else {
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
const postProyectos = (req, res) => {
    try {

        const { descripcion, estado, fecha_creacion, id_usuario } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO proyectos(descripcion, estado, fecha_creacion, id_usuario) VALUES ('${descripcion}','${estado}','${fecha_creacion}','${id_usuario}' `, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query post")
            } else {
                console.log(response);
                res.json(response)
            }
        })

    } catch (error) {
        console.log(error);
        res.json("error en query")
    }
}


//delete
const deleteProyectos = (req, res) => {
    try {

        const { id } = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM proyectos WHERE id=${id} `, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query delete")
            } else {
                console.log(response);
                res.json(response)
            }
        })

    } catch (error) {
        console.log(error);
        res.json("error en query")
    }
}


//put
const putProyectos = (req, res) => {
    try {

        const { id } = req.params
        const { descripcion, estado, fecha_creacion, id_usuario } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE proyectos SET descripcion = '${descripcion}', estado= '${estado}', fecha_creacion='${fecha_creacion}', id_usuario='${id_usuario}' WHERE id=${id} `, (err, response) => {
            if (err) {
                console.log(err);
                res.json("error en query put")
            } else {
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
    getProyectos,
    getOneProyectos,
    postProyectos,
    deleteProyectos,
    putProyectos
}