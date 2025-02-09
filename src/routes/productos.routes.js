import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controllers";
const router = Router();

// Define the route for '/productos'
router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').delete(borrarProducto).put(editarProducto).get(obtenerProducto);

export default router;