import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getFondos = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM fondos`, (err, response) => {
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
const getOneFondos = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM fondos WHERE id= ${id}`, (err, response) => {
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
const postFondos = (req, res) => {
    try {

        const { img } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO fondos(img) VALUES ('${img}') `, (err, response) => {
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
const deleteFondos = (req, res) => {
    try {

        const { id } = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM fondos WHERE id=${id} `, (err, response) => {
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
const putFondos = (req, res) => {
    try {

        const { id } = req.params
        const { img } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE fondos SET img = '${img}' WHERE id=${id} `, (err, response) => {
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
    getFondos,
    getOneFondos,
    postFondos,
    deleteFondos,
    putFondos
}