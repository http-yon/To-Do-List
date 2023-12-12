import mysql from "mysql2";


const mysqlConexion = ()=>{

    const conexion = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USUARIO,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    });
    
    conexion.connect((err) => {
        if (err) {
            console.log(err);
            console.log("error de conexion");
            return;
        }
    
        console.log("DATABASE CONNECTED");
        
    });
    
    return conexion
    
}

export default mysqlConexion;
