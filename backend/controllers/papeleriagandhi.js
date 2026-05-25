import { TablaPapeleria } from "../models/papeleria_gandhi.js";
TablaPapeleria.create({
    producto:"libreta",
    stock:5,
    precio:30
})
TablaPapeleria.create({
    producto:"lapiz",
    stock:20,
    precio:5
})
TablaPapeleria.create({
    producto:"goma",
    stock:10,
    precio:10
})
const test = () => console.log("Si se esta llamando al controlador")
export default test;