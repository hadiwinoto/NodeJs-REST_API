const db = require("../models");
const config = require("../config/auth.config");
const Pembanding = db.pembanding;


exports.findAll  = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  Pembanding.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Pembanding.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Data with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Data with id=" + id
      });
    });
};


exports.create = (req, res) => {
    Pembanding.create({
      name:   req.body.name,
      lokasi: req.body.lokasi,
      alamat: req.body.alamat,
      contact_person: req.body.contact_person
    }).then(data => {
       res.send(data)
    })
    .catch(err => {
       res.status(500).send({ message: err.message });
    });

}