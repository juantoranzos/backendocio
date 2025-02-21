import mongoose, {Schema} from "mongoose";
 const usuarioSchema = new Schema({
    email:{
        type: String,
        maxlength: 255,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
 });

 const Usuario = mongoose.model('Usuario', usuarioSchema);
 export default Usuario