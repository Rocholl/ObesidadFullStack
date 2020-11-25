module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("cursos", {
        idCurso: {
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
        Curso.belongsTo(models.centros, {
          through: 'centro_Datos',
          as: 'fk_Id_Datos',
          foreignKey: 'idDatos',
        }),
        Curso.belongsToMany(models.usuarios, {
            through: 'usuario_Cursos',
            as: 'fk_Id_Curso',
            foreignKey: 'idCurso',
          })

    };
    return Curso;
};