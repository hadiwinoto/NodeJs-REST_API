module.exports = (sequelize, Sequelize) => {
  const Pembanding = sequelize.define("pembanding", {
    name: {
      type: Sequelize.STRING
    },
    lokasi: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    contact_person:{
      type: Sequelize.STRING
    }
  });
  return Pembanding;
};