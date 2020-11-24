const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Centro_Datos extends Model{}
Centro_Datos.init ({
    
        idCentro: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Centro', // 'persons' refers to table name
                key: 'idCentro', // 'id' refers to column name in persons table
             }
        },
        idDatos: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'health', // 'persons' refers to table name
                key: 'idHealth', // 'id' refers to column name in persons table
             }
        },
        fecha: {
            type: DataTypes.DATE     
        }

      
    }, {db, timestamps: false });

    module.exports = Centro_Datos;
