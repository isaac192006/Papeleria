//primera cosa es la importaciones de librerias, conexion de base de datos y mandas a llamar controdores
import mongoose from "mongoose"; //libreria para conectar a la base de datos
import express from "express"; //libreria para crear el servidor
import cors from "cors"; //libreria para permitir el acceso a la api desde cualquier origen
import dotenv from "dotenv"; //libreria para cargar las variables de entorno desde un archivo .env
import test from "./backend/controllers/METROPOLITANA.controllers.js"; //importar el controlador de alumnos

dotenv.config(); //cargar las variables de entorno desde el archivo .env
mongoose.connect(process.env.url_bd) //conectar a la base de datos
.then(() => console.log("conectado a la base de datos")) //si la conexion es exitosa, mostrar un mensaje en la consola
.catch((error) => console.log(error)); //si la conexion falla, mostrar el error en la consola

const app = express(); //crear el servidor
app.use(cors());
//unservidor siempre se va escuchar en el 4000 hasta el 8000
app.listen(4000, () => console.log("servidor escuchando en el puerto 4000")) //iniciar el servidor y mostrar un mensaje en la consola
test(); //llamar al controlador de alumnos