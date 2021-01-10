import { Viaje } from "../models/Viaje.js";
import { Opiniones } from "../models/Opiniones.js";

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

// VIAJE INDIVIDUAL
const paginaViajeInd = async (req, res) => {
  const { slug } = req.params;

  try {
    const resultado = await Viaje.findOne({ where: { slug } });

    res.render("viaje", {
      pagina: "Informacion viaje",
      resultado,
    });
  } catch (error) {
    console.log(error);
  }
};

// NOSOTROS
const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};

// OPINIONES
const paginaOpiniones = async (req, res) => {
  try {
    const opiniones = await Opiniones.findAll();
    res.render("opiniones", {
      pagina: "Opiniones",
      opiniones,
    });
  } catch (error) {
    console.log(error);
  }
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
  paginaViajeInd,
};
