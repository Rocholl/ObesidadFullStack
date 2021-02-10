module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("cursos", {
        idCursos: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Curso: {
            type: Sequelize.STRING
           
           
        }

      
    }, { timestamps: false });
    Curso.associate = function(models) {
        // associations can be defined here
        
        Curso.belongsToMany(models.usuarios, {
            through: 'usuario_Cursos',
            as: 'fk_Id_Curso',
            foreignKey: 'idCurso',
          })
        Curso.hasMany(models.health,{

            foreignKey: 'idCurso'
        })
    };
    return Curso;
};