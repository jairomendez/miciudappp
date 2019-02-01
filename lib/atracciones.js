const atracciones = require("./atraccionesSchema");
exports.getatracciones = (req, res) => {
  atracciones.find((err, atracciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(atracciones);
  });
};

exports.getatracciones = (req, res) => {
  let id = req.params.id;
  atracciones.find({ _id: id }, (err, atracciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(atracciones);
  });
};

exports.newatracciones = (req, res) => {
  const newatracciones = new atracciones(req.body);
  newatracciones.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newatracciones);
  });
};

exports.updateatracciones = (req, res) => {
  let nom = req.body.nombre;
  atracciones.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, atracciones) => {
      if (err) return res.status(500).send(err);
      return res.send(atracciones);
    }
  );
};

exports.deleteatracciones = (req, res) => {
  atracciones.findByIdAndRemove(req.params.id, (err, atracciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(atracciones._id);
  });
};
