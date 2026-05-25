import{Schema,model} from "mongoose";//es el esqueleto de la base de datos, es decir, la estructura de los datos que se van a guardar en la base de datos

const EsquemaPapeleria = new Schema({
    producto:{type:String,required:true},
    stock:{type:Number,required:true},
    precio:{type:Number,required:true},
});

export const TablaPapeleria = new model("Tabla de papelería",EsquemaPapeleria)//crear la tabla papeleria en la base de datos
//exportar la tabla papeleria para poder usarla en otros archivos