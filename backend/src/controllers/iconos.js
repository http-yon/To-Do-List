import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getIconos = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM iconos`, (err, response) => {
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
const getOneIconos = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM iconos WHERE id= ${id}`, (err, response) => {
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
const postIconos = (req, res) => {
    try {

        const { img } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO iconos(img) VALUES ('${img}') `, (err, response) => {
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
const deleteIconos = (req, res) => {
    try {

        const { id } = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM iconos WHERE id=${id} `, (err, response) => {
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
const putIconos = (req, res) => {
    try {

        const { id } = req.params
        const { img } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE iconos SET img = '${img}' WHERE id=${id} `, (err, response) => {
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
    getIconos,
    getOneIconos,
    postIconos,
    deleteIconos,
    putIconos
}