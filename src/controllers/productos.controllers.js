import Producto from "../models/producto";

export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'error al buscar los productos'
        })
    }

}
export const crearProducto = async (req, res)=>{
   try {
    console.log(req.body);
    const nuevoProducto = new Producto(req.body);
    await nuevoProducto.save();
    res.status(201).json({
        mensaje: 'producto creado'
    })
    
   } catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: 'error al crear el producto'
    })
   }
}