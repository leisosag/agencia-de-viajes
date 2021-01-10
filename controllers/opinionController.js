import { Opiniones } from "../models/Opiniones.js";

const guardarOpinion = async (req, res) => {
  // validar
  const { nombre, email, mensaje } = req.body;

  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "El nombre está vacio" });
  }
  if (email.trim() === "") {
    errores.push({ mensaje: "El email está vacio" });
  }
  if (mensaje.trim() === "") {
    errores.push({ mensaje: "El mensaje está vacio" });
  }

  if (errores.length > 0) {
    // consulta opiniones existentes
    const opiniones = await Opiniones.findAll();
    // muestra la vista con los errores
    res.render("opiniones", {
      pagina: "Opiniones",
      errores,
      nombre,
      email,
      mensaje,
      opiniones,
    });
  } else {
    // almacena en la db
    try {
      await Opiniones.create({
        nombre,
        email,
        mensaje,
      });
      res.redirect("/opiniones");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarOpinion };
