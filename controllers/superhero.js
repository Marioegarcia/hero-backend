const Hero = require("../models/hero");

function addHero(req, res) {
  const body = req.body;
  const hero = new Hero(body);

  hero.save((err, heroStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!heroStored) {
        res
          .status(400)
          .send({ code: 400, message: "No se ha podido crear el post." });
      } else {
        res
          .status(200)
          .send({ code: 200, message: "Post creado correctamente." });
      }
    }
  });
}

function getHeros(req, res) {
  const { page = 1, limit = 10 } = req.query;

  const options = {
    page,
    limit: parseInt(limit),
    sort: { date: "desc" }
  };

  Hero.paginate({}, options, (err, herosStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!herosStored) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ningun post." });
      } else {
        res.status(200).send({ code: 200,  herosStored });
      }
    }
  });
}



function deleteHero(req, res) {
  const { id } = req.params;

  Hero.findByIdAndRemove(id, (err, heroDeleted) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!heroDeleted) {
        res.status(404).send({ code: 404, message: "Post no encontrado." });
      } else {
        res.status(200).send({
          code: 200,
          message: "El post ha sido eliminado correctamente."
        });
      }
    }
  });
}

function getHero(req, res) {
  const { url } = req.params;

  Hero.findOne({ url }, (err, heroStored) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!heroStored) {
        res
          .status(404)
          .send({ code: 404, message: "No se ha encontrado ningun post." });
      } else {
        res.status(200).send({ code: 200, heroStored });
      }
    }
  });
}

module.exports = {
  addHero,
  getHeros,
  deleteHero,
  getHero
};
