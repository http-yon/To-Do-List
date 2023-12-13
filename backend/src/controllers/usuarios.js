import mysqlConexion from "../database/dbCnx.js"
import dotenv from "dotenv"
dotenv.config()


//get
const getUsuarios = (req, res) => {
    try {
        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM usuario`, (err, response) => {
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


//get one
const getOneUsuario = (req, res) => {
    try {

        const { id } = req.params

        const dbCnx = mysqlConexion()

        dbCnx.query(`SELECT * FROM usuario WHERE id= ${id}`, (err, response) => {
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
const postUsuarios = (req, res) => {
    try {

        const { nombre, apellido, correo, contraseña, celular } = req.body
        const estado = true

        const dbCnx = mysqlConexion()

        dbCnx.query(`INSERT INTO usuario(nombre,apellido,correo,contraseña,celular,estado) VALUES ('${nombre}','${apellido}','${correo}','${contraseña}','${celular}','${estado}')`, (err, response) => {
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
const deleteUsuario = (req, res) => {
    try {

        const { id } = req.params
        const dbCnx = mysqlConexion()

        dbCnx.query(`DELETE FROM usuario WHERE id=${id} `, (err, response) => {
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
const putUsuario = (req, res) => {
    try {

        const { id } = req.params
        const { nombre, apellido, correo, contraseña, celular } = req.body

        const dbCnx = mysqlConexion()

        dbCnx.query(`UPDATE usuario SET nombre = '${nombre}', apellido= '${apellido}', correo='${correo}', contraseña='${contraseña}',celular='${celular}',estado=true WHERE id=${id} `, (err, response) => {
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
    getUsuarios,
    getOneUsuario,
    postUsuarios,
    deleteUsuario,
    putUsuario
}