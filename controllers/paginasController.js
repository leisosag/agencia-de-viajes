import { Viaje } from "../models/Viaje.js";
import { Opiniones } from "../models/Opiniones.js";

// INICIO
const paginaInicio = async (req, res) => {
  // trae 3 viajes del modelo viajes y las opiniones
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 4 }));
  promiseDB.push(Opiniones.findAll({ limit: 3 }));
  try {
    const resultado = await Promise.all(promiseDB);

    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes: resultado[0],
      opiniones: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
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
