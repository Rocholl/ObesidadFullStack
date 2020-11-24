const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Curso extends Model{}
Curso.init ({
        idCurso: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        Curso: {
            type: DataTypes.STRING
           
           
        },
        Letra: {
            type: DataTypes.STRING     
        }

      
    }, {db, timestamps: false });
   
module.exports = Curso;
    
