module.exports = (sequelize, Sequelize) => {
    const Municipio = sequelize.define("municipios", {
        idMunicipios: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        isla: {
            type: Sequelize.ENUM('Las palmas')            
        }

      
    },  {
    
        timestamps: false
    });
    Municipio.associate = function(models) {
        Municipio.hasMany(models.centros, {
       
          as: 'fk_Id_Municipios',
          foreignKey: 'idMunicipios'
         
        })
    };
    return Municipio;
};