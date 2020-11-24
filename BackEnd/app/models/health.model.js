const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Health extends Model{}
Health.init ({
        idHealth: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        masa_Grasa: {
            type: DataTypes.DOUBLE
        },
        masa_Viseral: {
            type: DataTypes.DOUBLE,
        },
        idCurso: {
            type: DataTypes.INTEGER
          
            
        }

      
    }, {db, timestamps: false });
 
        //  
        module.exports = Health;
