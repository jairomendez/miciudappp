const comentarios = require("./comentariosSchema");
exports.getcomentarios = (req, res) => {
  comentarios.find((err, comentarios) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comentarios);
  });
};

exports.getcomentarios = (req, res) => {
  let id = req.params.id;
  comentarios.find({ _id: id }, (err, comentarios) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comentarios);
  });
};

exports.newcomentarios = (req, res) => {
  const newcomentarios = new comentarios(req.body);
  newcomentarios.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newcomentarios);
  });
};

exports.updatecomentarios = (req, res) => {
  let nom = req.body.nombre;
  comentarios.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, comentarios) => {
      if (err) return res.status(500).send(err);
      return res.send(comentarios);
    }
  );
};

exports.deletecomentarios = (req, res) => {
  comentarios.findByIdAndRemove(req.params.id, (err, comentarios) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(comentarios._id);
  });
};
