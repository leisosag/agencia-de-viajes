import express from "express";
import router from "./routes/index.js";
const app = express();

// defino el puerto
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

// defino carpeta public
app.use(express.static("public"));

// agrego router
app.use("/", router);

// arranca el servidor
app.listen(port, () =>
  console.log(`el servidor esta funcionando en el puerto ${port}`)
);
