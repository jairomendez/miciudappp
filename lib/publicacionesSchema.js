const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const publicacionesSchema = new Schema({
  usuarioId: String,
  categoria: String,
  cantidadcomentarios: String,
});

module.exports = mongoose.model("publicaciones", publicacionesSchema);
