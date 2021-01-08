import express from "express";
const router = express.Router();
import {
  paginaInicio,
  paginaDestinos,
  paginaNosotros,
  paginaOpiniones,
  paginaContacto,
} from "../controllers/paginasController.js";

// INICIO
router.get("/", paginaInicio);

// DESTINOS
router.get("/destinos", paginaDestinos);

// NOSOTROS
router.get("/nosotros", paginaNosotros);

// OPINIONES
router.get("/opiniones", paginaOpiniones);

// CONTACTO
router.get("/contacto", paginaContacto);

export default router;
