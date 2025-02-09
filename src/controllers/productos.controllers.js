import Producto from "../models/producto";
//controlador para obtener todos los productos
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
//controlador para crear un producto en la base de datos
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
//controlador para actualizar un producto
// export const actualizarProducto = async (req, res) => {
//     try {
//         const productoActualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
//         res.status(200).json(productoActualizado);
//     } catch (error) {
//         console.log(error);
//         res.status(404).json({
//             mensaje: 'error al actualizar el producto'
//         })
//     }
// }
//controlador para borrar un producto
export const borrarProducto = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'producto borrado'
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'error al borrar el producto'
        })
    }
}
export const editarProducto = async (req, res)=>{
try {
   await Producto.findByIdAndUpdate(req.params.id, req.body);
   res.status(200).json({
       mensaje: 'producto editado con exito'
   })

} catch (error) {
    console.log(error);
    res.status(404).json({
        mensaje: 'error al editar el producto'
    })
    
}
}