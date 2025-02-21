import { Router } from "express";
import { check } from "express-validator";
import {
  listarUsuarios,
  crearUsuario,
  login,
} from "../controllers/usuario.controllers";

const router = Router();

//agregar las validaciones con express-validator
router
  .route("/")
  .get(listarUsuarios)
  .post(login)

router.route("/nuevo").post(
  [
    check("nombreUsuario").notEmpty().withMessage("El nombre es obligatorio"),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres")
      .isLength({
        min: 6,
        max: 15,
      }),
  ],
  crearUsuario
)

export default router;