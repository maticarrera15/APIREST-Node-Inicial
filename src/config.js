import { config } from "dotenv";

config(); //pone a disposicion las variabvles de entorno q hayamos asignado en .env
//Permite interactuar con valores de mi entorno virtual q son las variables de .env., las ubicaen el objeto process con esto
//oculto los valores originales que estan en env, sin necesidad de exponerlos

export default {
    host: process.env.HOST || "",
    database: process.env.DATABASE || "",
    user: process.env.user || "",
    password: process.env.PASSWORD || ""
};