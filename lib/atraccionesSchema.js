const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const atraccionesSchema = new Schema({

  titulo: String,
  descripcion: String,
  ubicacion: String,
  imagen: String,
});

module.exports = mongoose.model("atracciones", atraccionesSchema);
