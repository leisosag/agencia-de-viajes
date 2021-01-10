import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";
import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const app = express();

// conecta la db
db.authenticate()
  .then(() => console.log("db conectada"))
  .catch((error) => console.log(error));

// puerto y host para la app
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4000;

// habilito PUG
app.set("view engine", "pug");

// obtiene el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Trip";
  next();
});

// agrega body parser para leer los datos del form
app.use(express.urlencoded({ extends: true }));

// defino carpeta public
app.use(express.static("public"));

// agrego router
app.use("/", router);

// arranca el servidor
app.listen(port, host, () => console.log("el servidor esta funcionando"));
