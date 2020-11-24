const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Centro extends Model{}
     Centro.init({
        idCentro: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
      
        codigo_Postal: {
            type: DataTypes.INTEGER            
        },
        lat: {
            type: DataTypes.DOUBLE            
        },long: {
            type: DataTypes.DOUBLE            
        },
        idMunicipio: {
            type: DataTypes.INTEGER,
          
        }

      
    }, {db, 
        timestamps: false,
        tableName: 'centro', });
<<<<<<< HEAD
 
          
        
        module.exports = Centro;
=======

    return Centro;
};
>>>>>>> parent of 6d0f470... Sequelize test 2
