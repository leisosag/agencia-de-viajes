import express from "express";
const router = express.Router();

// INICIO
router.get("/", (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
});

// DESTINOS
router.get("/destinos", (req, res) => {
  res.render("destinos", {
    pagina: "Destinos",
  });
});

// NOSOTROS
router.get("/nosotros", (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
});

// OPINIONES
router.get("/opiniones", (req, res) => {
  res.render("opiniones", {
    pagina: "Opiniones",
  });
});

// CONTACTO
router.get("/contacto", (req, res) => {
  res.render("contacto", {
    pagina: "Contacto",
  });
});

export default router;
