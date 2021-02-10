module.exports = (sequelize, Sequelize) => {
    const Distrito = sequelize.define("distrito", {
        idDistrito: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        }
      
    },  {
    
        timestamps: false
    });
    Distrito.associate = function(models) {
        Distrito.hasMany(models.centros, {
       
          as: 'fk_Id_Distrito',
          foreignKey: 'idDistrito'
         
        })
    };
    return Distrito;
};