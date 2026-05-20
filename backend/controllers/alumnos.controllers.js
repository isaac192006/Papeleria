import { TablaAlumnos } from "../models/alumnos.models.js";

TablaAlumnos.create({
    nombre:"Abner",
    calificacion:5,
    materias:["Matematicas"]
})

const test = () => console.log("Si se esta llamando al controlador")
export default test;