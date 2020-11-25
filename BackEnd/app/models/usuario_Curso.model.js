module.exports = (sequelize, Sequelize) => {
    const usuario_Curso = sequelize.define("usuario_Cursos", {
        idUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true
        
        },
        idCurso: {
            type: Sequelize.INTEGER,
            primaryKey: true
      
        },
        fecha: {
            type: Sequelize.DATE     
        }

      
    }, { timestamps: false });
   
    return usuario_Curso;
};