const eventos = require("./eventosSchema");
exports.geteventos = (req, res) => {
  eventos.find((err, eventos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(eventos);
  });
};

exports.geteventos = (req, res) => {
  let id = req.params.id;
  eventos.find({ _id: id }, (err, eventos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(eventos);
  });
};

exports.neweventos = (req, res) => {
  const neweventos = new eventos(req.body);
  neweventos.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(neweventos);
  });
};

exports.updateeventos = (req, res) => {
  let nom = req.body.nombre;
  eventos.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, eventos) => {
      if (err) return res.status(500).send(err);
      return res.send(eventos);
    }
  );
};

exports.deleteeventos = (req, res) => {
  eventos.findByIdAndRemove(req.params.id, (err, eventos) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(eventos._id);
  });
};
