module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define("curso", {
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
        Curso.hasMany(models.centro, {
          through: 'centro_Datos',
          as: 'fk_Id_Datos',
          foreignKey: 'idDatos',
        }),
        Curso.hasMany(models.usuarios, {
            through: 'usuario_Curso',
            as: 'fk_Id_Curso',
            foreignKey: 'idCurso',
          })
    };
    return Curso;
};