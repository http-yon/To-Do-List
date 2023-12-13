import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getTablaTareas = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM tabla_tareas`, (err, response) => {
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
const getOneTablaTareas = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM tabla_tareas WHERE id= ${id}`, (err, response) => {
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
const postTablaTareas = (req, res) => {
    try {

        const { titulo, descripcion, pinned, fecha_inicio, ultima_modificacion, id_icono, id_fondo, id_proyecto } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO tabla_tareas( titulo, descripcion, pinned, fecha_inicio, ultima_modificacion, id_icono, id_fondo, id_proyecto) VALUES ('${titulo}', '${descripcion}', '${pinned}', '${fecha_inicio}', '${ultima_modificacion}', '${id_icono}', '${id_fondo}', '${id_proyecto}') `, (err, response) => {
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
const deleteTablaTareas = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM tabla_tareas WHERE id=${id} `, (err, response) => {
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
const putTablaTareas = (req, res) => {
    try {

        const { id } = req.params
        const { titulo, descripcion, pinned, fecha_inicio, ultima_modificacion, id_icono, id_fondo, id_proyecto } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE tabla_tareas SET titulo='${titulo}', descripcion='${descripcion}', pinned='${pinned}', fecha_inicio='${fecha_inicio}', ultima_modificacion='${ultima_modificacion}', id_icono='${id_icono}', id_fondo='${id_fondo}', id_proyecto='${id_proyecto}' WHERE id=${id} `, (err, response) => {
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
    getTablaTareas,
    getOneTablaTareas,
    postTablaTareas,
    deleteTablaTareas,
    putTablaTareas
}