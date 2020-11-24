module.exports = (sequelize, Sequelize) => {
    const Centro = sequelize.define("Centro", {
        idCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
      
        codigo_Postal: {
            type: Sequelize.INTEGER            
        },
        lat: {
            type: Sequelize.DOUBLE            
        },long: {
            type: Sequelize.DOUBLE            
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
 
            Centro.hasMany(health, {
              through: 'centro_Datos',
              as: 'fk_Id_Centro',
              foreignKey: 'idCentro',
            })
        
    return Centro;
};