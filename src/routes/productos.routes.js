import { Router } from "express";
import { crearProducto, obtenerProductos } from "../controllers/productos.controllers";
const router = Router();

// Define the route for '/productos'
router.route('/productos').get(obtenerProductos).post(crearProducto);

export default router;