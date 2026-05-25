import { TablaMetropolitana} from "../models/METROPOLITANA.models.js";

TablaMetropolitana.create({
    nombre:"Abner",
    calificacion:5,
    materias:["Matematicas"]
})

TablaMetropolitana.create({
    nombre:"Isaac",
    calificacion:10,
    materias:["Matematicas"]
})

TablaMetropolitana.create({
    nombre:"juan",
    calificacion:8,
    materias:["Matematicas"]
})

const test = () => console.log("Si se esta llamando al controlador")
export default test;