module.exports = (sequelize, Sequelize) => {
    const Centro = sequelize.define("Centro", {
        idCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Nombre: {
            type: Sequelize.STRING
        },
      
        Codigo_Postal: {
            type: Sequelize.INTEGER            
        },
        Coordenadas:{
            type: Sequelize.STRING
        },
        idMunicipio: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Municipio', // 'persons' refers to table name
                key: 'Id_Municipio', // 'id' refers to column name in persons table
             }
        }

      
    }, { timestamps: false,
        tableName: 'centro', });

    return Centro;
};