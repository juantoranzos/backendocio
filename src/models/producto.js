import { Schema, model } from "mongoose";
const productoScheme = new Schema({
    categoria: String,
    marca: String,
    nombreProducto: String,
    precio: Number,
    stock: Number,
    img: String
})

const Producto = model('producto', productoScheme);

export default Producto