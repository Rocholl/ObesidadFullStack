<<<<<<< HEAD
const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Usuario extends Model{}
Usuario.init ({
=======
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuarios", {
>>>>>>> parent of 6d0f470... Sequelize test 2
        idUsuarios: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        nombre:{
            type: DataTypes.STRING      
        },
        apellidos:{
            type: DataTypes.STRING      
        },
        rol:{
            type: DataTypes.ENUM('Admin','Profesor','Alumno')  
        },
      
    
<<<<<<< HEAD
    }, {db, timestamps: false });
 
module.exports= Usuario;
=======
    }, { timestamps: false });

    return Usuario;
};
>>>>>>> parent of 6d0f470... Sequelize test 2
