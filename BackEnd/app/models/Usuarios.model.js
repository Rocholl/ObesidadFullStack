const { Model, DataTypes } = require('sequelize'); 
const db = require('./index');
class Usuario extends Model{}
Usuario.init ({
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
      
    
    }, {db, timestamps: false });
 
module.exports= Usuario;