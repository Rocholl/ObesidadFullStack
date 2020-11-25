module.exports = (sequelize, Sequelize) => {
    const Health = sequelize.define("healths", {
        idHealth: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        masa_Grasa: {
            type: Sequelize.DOUBLE
        },
        masa_Viseral: {
            type: Sequelize.DOUBLE,
        },
        idCurso: {
            type: Sequelize.INTEGER,
          
            references: {
                model: 'Curso', // 'persons' refers to table name
                key: 'idCurso', // 'id' refers to column name in persons table
             }
        }

      
    }, { timestamps: false });
    Health.associate = function(models) {
        // associations can be defined here
        Health.belongsToMany(models.centros, {
          through: 'centro_Datos',
          as: 'fk_Id_Datos',
          foreignKey: 'idDatos',
        })
    };
        //  
    return Health;
};