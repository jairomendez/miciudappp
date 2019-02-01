const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comentariosSchema = new Schema({
  publicacionId: String,
  fecha: String,
  cuerpo: String,
});

module.exports = mongoose.model("comentarios", comentariosSchema);
