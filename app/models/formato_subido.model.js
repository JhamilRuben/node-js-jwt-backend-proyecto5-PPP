module.exports = (sequelize, Sequelize) => {
    const Formato_subido = sequelize.define("formato_subido", {
      title: {
        type: Sequelize.STRING

      },
      estado: {
        type: Sequelize.STRING
      }
    });
  
    return Formato_subido;
  };