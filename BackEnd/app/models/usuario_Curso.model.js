module.exports = (sequelize, Sequelize) => {
    const usuario_Curso = sequelize.define("usuario_Cursos", {
       

      
    }, { timestamps: false });
   
    return usuario_Curso;
};