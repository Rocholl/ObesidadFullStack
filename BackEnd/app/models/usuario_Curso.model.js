module.exports = (sequelize, Sequelize) => {
    const usuario_Curso = sequelize.define("usuario_Cursos", {
       

      
    }, { timestamps: true });
   
    return usuario_Curso;
};