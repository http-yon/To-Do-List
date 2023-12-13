import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getCategorias = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM categorias`, (err, response) => {
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
const getOneCategorias = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM categorias WHERE id= ${id}`, (err, response) => {
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
const postCategorias = (req, res) => {
    try {

        const { nombre, color, usuario_id } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO categorias(nombre, color, usuario_id) VALUES ('${nombre}','${color}','${usuario_id}') `, (err, response) => {
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
const deleteCategorias = (req, res) => {
    try {

        const { id } = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM categorias WHERE id=${id} `, (err, response) => {
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
const putCategorias = (req, res) => {
    try {

        const { id } = req.params
        const { nombre, color, usuario_id } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE categorias SET nombre = '${nombre}', color = '${color}', usuario_id = '${usuario_id}'  WHERE id=${id} `, (err, response) => {
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
    getCategorias,
    getOneCategorias,
    postCategorias,
    deleteCategorias,
    putCategorias
}