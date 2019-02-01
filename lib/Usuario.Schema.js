const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  mane: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
