const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model("Usuario", UsuarioSchema);
