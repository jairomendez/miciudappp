const talentos = require("./talentosSchema");
exports.gettalentos = (req, res) => {
  talentos.find((err, talentos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(talentos);
  });
};

exports.gettalentos = (req, res) => {
  let id = req.params.id;
  talentos.find({ _id: id }, (err, talentos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(talentos);
  });
};

exports.newtalentos = (req, res) => {
  const newtalentos = new talentos(req.body);
  newtalentos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newtalentos);
  });
};

exports.updatetalentos = (req, res) => {
  let nom = req.body.nombre;
  talentos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, talentos) => {
      if (err) return res.status(500).send(err);
      return res.send(talentos);
    }
  );
};

exports.deletetalentos = (req, res) => {
  talentos.findByIdAndRemove(req.params.id, (err, talentos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(talentos._id);
  });
};
