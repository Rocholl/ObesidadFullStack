module.exports = (sequelize, Sequelize) => {
    const Centro = sequelize.define("centros", {
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
        });
        Centro.associate = function(models) {
            Centro.hasMany(models.usuarios, {
           as:"fk_usu_Id_Centro",
           foreignKey:{
            name: "idCentros"
          }
          
             
            }),
            Centro.belongsTo(models.municipios
              ),
              Centro.belongsToMany(models.healths, {
                through: 'centro_Datos',
                as: 'fkIdHeal',
                foreignKey: "idCentros"
              })
        };
    return Centro;
};