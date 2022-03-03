import { Schema,model } from 'mongoose';

const tiendaSchema = new Schema({
    name:{type: String, required:true},
},{
    versionKey:false//Quita el __v de la coleccion
});

export default model('tienda',tiendaSchema)