import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProductos } from "../controllers/productos.controllers";
const router = Router();

// Define the route for '/productos'
router.route('/productos').get(obtenerProductos).post(crearProducto);
router.route('/productos/:id').delete(borrarProducto).put(editarProducto);

export default router;