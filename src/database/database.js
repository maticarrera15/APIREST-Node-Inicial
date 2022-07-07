import mysql from "promise-mysql";
import config from "./../config";
//Si mas adelante quiero cambiar mi base de datos solo tengo que cambiar las variables del archivo .env
const connection =mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password:config.password
})

const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
};