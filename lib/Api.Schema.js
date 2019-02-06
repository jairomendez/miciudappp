const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  email: String,
  key: String,
});

module.exports = mongoose.model("Api", ApiSchema);
