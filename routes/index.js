import express from "express";
const router = express.Router();
import {
  paginaInicio,
  paginaDestinos,
  paginaNosotros,
  paginaOpiniones,
  paginaContacto,
  paginaViajeInd,
} from "../controllers/paginasController.js";
import { guardarOpinion } from "../controllers/opinionController.js";

// INICIO
router.get("/", paginaInicio);

// DESTINOS
router.get("/destinos", paginaDestinos);

// VIAJE INDIVIDUAL
router.get("/viajes/:slug", paginaViajeInd);

// NOSOTROS
router.get("/nosotros", paginaNosotros);

// OPINIONES
router.get("/opiniones", paginaOpiniones);
router.post("/opiniones", guardarOpinion);

// CONTACTO
router.get("/contacto", paginaContacto);

export default router;
