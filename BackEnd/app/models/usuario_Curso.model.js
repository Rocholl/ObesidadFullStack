const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Usuario_Curso extends Model{}
Usuario_Curso.init ({
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'Centro', // 'persons' refers to table name
                key: 'idCentro', // 'id' refers to column name in persons table
             }
        },
        idCurso: {
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
   module.exports= Usuario_Curso;
