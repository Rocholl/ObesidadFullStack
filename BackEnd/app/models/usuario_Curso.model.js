module.exports = (sequelize, Sequelize) => {
    const usuario_Curso = sequelize.define("usuario_Curso", {
        idUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'Centro', // 'persons' refers to table name
                key: 'idCentro', // 'id' refers to column name in persons table
             }
        },
        idCurso: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'health', // 'persons' refers to table name
                key: 'idHealth', // 'id' refers to column name in persons table
             }
        },
        fecha: {
            type: Sequelize.DATE     
        }

      
    }, { timestamps: false });
   
    return usuario_Curso;
};