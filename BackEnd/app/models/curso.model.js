module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("cursos", {
        idCursos: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Curso: {
            type: Sequelize.STRING
           
           
        },
        Letra: {
            type: Sequelize.STRING     
        }

      
    }, { timestamps: false });
    Curso.associate = function(models) {
        // associations can be defined here
        
        Curso.belongsToMany(models.usuarios, {
            through: 'usuario_Cursos',
            as: 'fk_Id_Curso',
            foreignKey: 'idCursos',
          })
        Curso.hasMany(models.healths,{

            foreignKey: 'idCursos'
        })
    };
    return Curso;
};