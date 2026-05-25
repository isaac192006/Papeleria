import{Schema,model} from "mongoose";//es el esqueleto de la base de datos, es decir, la estructura de los datos que se van a guardar en la base de datos

const EsquemaNissan = new Schema({
    NoEmpleado : {type:Number,required:true},
    Nombre: {type:String,required:true},
    Sueldo: {type:Number,required:true},
});

export const TablaNissan = new model("Tabla de empleados de Nissan",EsquemaNissan)//crear la tabla Nissan en la base de datos
//exportar la tabla Nissan para poder usarla en otros archivos