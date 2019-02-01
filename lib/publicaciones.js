const publicaciones = require("./publicacionesSchema");
exports.getpublicaciones = (req, res) => {
  publicaciones.find((err, publicaciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(publicaciones);
  });
};

exports.getpublicaciones = (req, res) => {
  let id = req.params.id;
  publicaciones.find({ _id: id }, (err, publicaciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(publicaciones);
  });
};

exports.newpublicaciones = (req, res) => {
  const newpublicaciones = new publicaciones(req.body);
  newpublicaciones.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(newpublicaciones);
  });
};

exports.updatepublicaciones = (req, res) => {
  let nom = req.body.nombre;
  publicaciones.findOneAndUpdate(
    { _id: req.params.id },
    { nombre: nom },
    (err, publicaciones) => {
      if (err) return res.status(500).send(err);
      return res.send(publicaciones);
    }
  );
};

exports.deletepublicaciones = (req, res) => {
  publicaciones.findByIdAndRemove(req.params.id, (err, publicaciones) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send(publicaciones._id);
  });
};
