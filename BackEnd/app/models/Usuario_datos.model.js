module.exports = (sequelize, Sequelize) => {
    const usuario_datos = sequelize.define("usuario_datos", {
        idUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'Alumno', // 'persons' refers to table name
                key: 'idUsuarios', // 'id' refers to column name in persons table
             }
        },
        idDatos: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'health', // 'persons' refers to table name
                key: 'idhealth', // 'id' refers to column name in persons table
             }
        },
        Fecha: {
            type: Sequelize.DATE     
        }

      
    }, { timestamps: false });

    return usuario_datos;
};