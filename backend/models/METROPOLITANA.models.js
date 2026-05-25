import{Schema,model} from "mongoose";//es el esqueleto de la base de datos, es decir, la estructura de los datos que se van a guardar en la base de datos

const EsquemaMetropolitana = new Schema({
    nombre:{type:String,required:true},
    calificacion:{type:Number,required:true},
    materias:{type:Array,required:true},
});

export const TablaMetropolitana = new model("Tabla de metropolitana",EsquemaMetropolitana)//crear la tabla metropolitana en la base de datos
//exportar la tabla metropolitana para poder usarla en otros archivos