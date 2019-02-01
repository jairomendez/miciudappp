const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventosSchema = new Schema({
  titulo: String,
  descripcion: String,
  ubicacion: String,
  fecha: String,
});

module.exports = mongoose.model("eventos", eventosSchema);
