  
module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        idUsuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nombre:{
            type: Sequelize.STRING      
        },
        apellidos:{
            type: Sequelize.STRING      
        },
        rol:{
            type: Sequelize.ENUM('Admin','Profesor','Alumno')  
        },
     
    
    }, { timestamps: false });
    Usuario.associate = function(models) {
        // associations can be defined here
      
        Usuario.belongsToMany(models.cursos, {
            through: 'usuario_Cursos',
           
            foreignKey: 'idUsuarios',
          })
    };
 
    return Usuario;
};