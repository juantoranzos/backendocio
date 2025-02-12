import { Router } from "express";
import { borrarProducto, crearProducto, editarProducto, obtenerProducto, obtenerProductos } from "../controllers/productos.controllers";
import { check } from "express-validator";
const router = Router();

// Define the route for '/productos'
router.route('/productos').get(obtenerProductos).post([check("nombreProducto").notEmpty().withMessage("El nombre del producto es obligatorio").isLength({min:2, max:100}).withMessage("El nombre debe tener entre 2 y 100 caracteres"), check("precio").notEmpty().withMessage("El precio del producto es obligatorio").isNumeric().withMessage("El precio debe ser un número válido").custom((value)=>{if(value >= 10 && value <= 150000){return true}else{throw new Error("El precio debe estar entre 10 y 150000")}}), check("img").notEmpty().withMessage("La imagen del producto es obligatoria").matches(/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)$/i).withMessage("La imagen debe ser una URL válida"), check("categoria").notEmpty().withMessage("La categoria del producto es obligatoria").isIn(["bebidas", "accesorios", "tabacos"]).withMessage("La categoria debe ser bebidas, accesorios o tabacos")],crearProducto);
router.route('/productos/:id').delete(borrarProducto).put(editarProducto).get(obtenerProducto);

export default router;