import { Viaje } from "../models/Viaje.js";

// INICIO
const paginaInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};

// DESTINOS
const paginaDestinos = async (req, res) => {
  const viajes = await Viaje.findAll();
  console.log(viajes);

  res.render("destinos", {
    pagina: "Destinos",
    viajes,
  });
};

// NOSOTROS
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

// OPINIONES
const paginaOpiniones = (req, res) => {
  res.render("opiniones", {
    pagina: "Opiniones",
  });
};

// CONTACTO
const paginaContacto = (req, res) => {
  res.render("contacto", {
    pagina: "Contacto",
  });
};

export {
  paginaInicio,
  paginaDestinos,
  paginaNosotros,
  paginaOpiniones,
  paginaContacto,
};
