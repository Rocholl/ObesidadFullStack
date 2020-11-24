<<<<<<< HEAD
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
=======
module.exports = (sequelize, Sequelize) => {
    const curso = sequelize.define("curso", {
        idCUrso: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Curso: {
            type: Sequelize.String
>>>>>>> parent of 6d0f470... Sequelize test 2
           
           
        },
        Letra: {
<<<<<<< HEAD
            type: DataTypes.STRING     
        }

      
    }, {db, timestamps: false });
   
module.exports = Curso;
    
=======
            type: Sequelize.String     
        }

      
    }, { timestamps: false });

    return curso;
};
>>>>>>> parent of 6d0f470... Sequelize test 2
