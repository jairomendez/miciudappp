const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  id: String,
  key: String,
});

module.exports = mongoose.model("Api", ApiSchema);
