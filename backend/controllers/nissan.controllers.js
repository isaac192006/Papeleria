import { TablaNissan } from "../models/nissan.models.js";

TablaNissan.create({
    NoEmpleado : 10,
    Nombre:"Abner",
    Sueldo: 1500
})

TablaNissan.create({
    NoEmpleado : 11,
    Nombre:"Isaac",
    Sueldo: 1500
})

const test = () => console.log("Si se esta llamando al controlador")
export default test;