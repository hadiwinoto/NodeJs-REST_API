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
    contactPerson:{
      type: Sequelize.STRING
    }
  });
  return Pembanding;
};