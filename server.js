//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
mongoose
.connect(
 // "mongodb://localhost:27017/miciudad",

 "mongodb://miciudappp:bMtQ01yUmb39C00N..@cluster0-shard-00-00-xshgl.mongodb.net:27017,cluster0-shard-00-01-xshgl.mongodb.net:27017,cluster0-shard-00-02-xshgl.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos

var Usuario = require("./lib/Usuario");

app.get("/Usuario", (req, res) => {
  Usuario.getUsuario(req, res);
});

app.get("/Usuario/:id", (req, res) => {
  Usuario.getUsuario(req, res);
});

app.post("/Usuario", (req, res) => {
  Usuario.newUsuario(req, res);
});

app.put("/Usuario/:id", (req, res) => {
  Usuario.updateUsuario(req, res);
});

app.delete("/Usuario/:id", (req, res) => {
  Usuario.deleteUsuario(req, res);
});

var eventos = require("./lib/eventos");
app.get("/eventos", (req, res) => {
  eventos.geteventos(req, res);
});

app.get("/eventos/:id", (req, res) => {
  eventos.geteventos(req, res);
});

app.post("/eventos", (req, res) => {
  eventos.neweventos(req, res);
});

app.put("/eventos/:id", (req, res) => {
  eventos.updateeventos(req, res);
});

app.delete("/eventos/:id", (req, res) => {
  eventos.deleteeventos(req, res);
});

var atracciones = require("./lib/atracciones");

app.get("/atracciones", (req, res) => {
  atracciones.getatracciones(req, res);
});

app.get("/atracciones/:id", (req, res) => {
  atracciones.getatracciones(req, res);
});

app.post("/atracciones", (req, res) => {
  atracciones.newatracciones(req, res);
});

app.put("/atracciones/:id", (req, res) => {
  atracciones.updateatracciones(req, res);
});

app.delete("/atracciones/:id", (req, res) => {
  atracciones.deleteatracciones(req, res);
});

var talentos = require("./lib/talentos");

app.get("/talentos", (req, res) => {
  talentos.gettalentos(req, res);
});

app.get("/talentos/:id", (req, res) => {
  talentos.gettalentos(req, res);
});

app.post("/talentos", (req, res) => {
  talentos.newtalentos(req, res);
});

app.put("/talentos/:id", (req, res) => {
  talentos.updatetalentos(req, res);
});

app.delete("/talentos/:id", (req, res) => {
  talentos.deletetalentos(req, res);
});

var publicaciones = require("./lib/publicaciones");

app.get("/publicaciones", (req, res) => {
  publicaciones.getpublicaciones(req, res);
});

app.get("/publicaciones/:id", (req, res) => {
  publicaciones.getpublicaciones(req, res);
});

app.post("/publicaciones", (req, res) => {
  publicaciones.newpublicaciones(req, res);
});

app.put("/publicaciones/:id", (req, res) => {
  publicaciones.updatepublicaciones(req, res);
});

app.delete("/publicaciones/:id", (req, res) => {
  publicaciones.deletepublicaciones(req, res);
});

var comentarios = require("./lib/comentarios");

app.get("/comentarios", (req, res) => {
  comentarios.getcomentarios(req, res);
});

app.get("/comentarios/:id", (req, res) => {
  comentarios.getcomentarios(req, res);
});

app.post("/comentarios", (req, res) => {
  comentarios.newcomentarios(req, res);
});

app.put("/comentarios/:id", (req, res) => {
  comentarios.updatecomentarios(req, res);
});

app.delete("/comentarios/:id", (req, res) => {
  comentarios.deletecomentarios(req, res);
});

app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
