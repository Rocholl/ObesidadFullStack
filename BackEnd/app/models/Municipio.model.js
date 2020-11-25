module.exports = (sequelize, Sequelize) => {
    const Municipio = sequelize.define("municipios", {
        idMunicipio: {
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
       
          as: 'fk_Id_Centros'
         
        })
    };
    return Municipio;
};