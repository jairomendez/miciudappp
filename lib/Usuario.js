const Usuario = require("./Usuario.Schema");
const Api = require("./Api.Schema");

exports.login = (req, res) => {
  Usuario.findOne(
    { email: req.body.email, password: req.body.password },
    (err, findUser) => {
      if (err) return res.status(500).send(err);
      if(findUser!=null){
        const newApi = new Api({
          email: findUser.email,
          key: Math.random().toString(36).substring(10)
        });
        newApi.save(err => {
          if (err) return res.status(500).send(err);
          return res.status(200).send({user:findUser,api:newApi});
        });
      }else{
        return res.status(404).send('{message: "User not found"}');
      }
    }
  );
};
exports.register = (req, res) => {
  const newUsuario = new Usuario({ name: req.body.name, username: req.body.username, email: req.body.email, password: req.body.password });
  newUsuario.save(err => {
      if (err) return res.status(500).send(err);
      const newApi = new Api({
        email: newUsuario.email,
        key: Math.random().toString(36).substring(10)
      });
      newApi.save(err => {
        if (err) return res.status(500).send(err);
        return res.status(200).send({user:newUsuario,api:newApi});
      });
    }
  );
};

exports.getUsuarios = (req, res) => {
  Usuario.find({},(err, Usuarios) => {
    if (err) return res.status(500).send(err);
    var userMap = [];

    Usuarios.forEach(function(user) {
      userMap[user._id] = user;
    });
    return res.status(200).send(Object.values(userMap));
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
