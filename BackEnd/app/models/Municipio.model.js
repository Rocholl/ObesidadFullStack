const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Municipio extends Model{}
Municipio.init ({
        idMunicipio: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: DataTypes.STRING
        },
        isla: {
            type: DataTypes.ENUM('Las palmas')            
        }

      
    },  {db,
        tableName: 'municipio',
        timestamps: false
    });

    module.exports = Municipio;