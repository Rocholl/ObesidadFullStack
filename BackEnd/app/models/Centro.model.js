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
 
          
        
        module.exports = Centro;
