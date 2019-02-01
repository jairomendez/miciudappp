const Usuario = require("./Usuario.Schema");
exports.getUsuario = (req, res) => {
  Usuario.find((err, Usuario) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Usuario);
  });
};

exports.getUsuario = (req, res) => {
  let id = req.params.id;
  Usuario.find({ _id: id }, (err, Usuario) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Usuario);
  });
};

exports.newUsuario = (req, res) => {
  const newUsuario = new Usuario(req.body);
  newUsuario.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newUsuario);
  });
};

exports.updateUsuario = (req, res) => {
  let nom = req.body.nombre;
  Usuario.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, Usuario) => {
      if (err) return res.status(500).send(err);
      return res.send(Usuario);
    }
  );
};

exports.deleteUsuario = (req, res) => {
  Usuario.findByIdAndRemove(req.params.id, (err, Usuario) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(Usuario._id);
  });
};
