module.exports = (sequelize, Sequelize) => {
    const centro_Datos = sequelize.define("centro_Datos", {
        idCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'Centro', // 'persons' refers to table name
                key: 'idCentro', // 'id' refers to column name in persons table
             }
        },
        idDatos: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            references: {
                model: 'health', // 'persons' refers to table name
                key: 'idHealth', // 'id' refers to column name in persons table
             }
        }

      
    }, { timestamps: true });

    return centro_Datos;
};
