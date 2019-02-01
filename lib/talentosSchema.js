const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const talentosSchema = new Schema({
  titulo: String,
  descripcion: String,
  imagen: String,
  video: String,
  tel: String,
});

module.exports = mongoose.model("talentos", talentosSchema);
