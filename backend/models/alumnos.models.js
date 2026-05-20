import{Schema,model} from "mongoose";//es el esqueleto de la base de datos, es decir, la estructura de los datos que se van a guardar en la base de datos

const EsquemaAlumnos = new Schema({
    nombre:{type:String,required:true},
    calificacion:{type:Number,required:true},
    materias:{type:Array,required:true},
});

export const TablaAlumnos = new model("Tabla de alumnos reprobados",EsquemaAlumnos)//crear la tabla alumnos en la base de datos
//exportar la tabla alumnos para poder usarla en otros archivos