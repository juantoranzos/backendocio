import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controllers";
import validarProducto from "../helpers/validarProducto";

const router = Router();

// Define the route for '/productos'
router.route('/productos').get(obtenerProductos).post( validarProducto ,crearProducto);
router.route('/productos/:id').delete( borrarProducto ).put( validarProducto ,editarProducto ).get( obtenerProducto );

export default router;