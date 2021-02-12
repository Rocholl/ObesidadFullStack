module.exports = (sequelize, Sequelize) => {
    const Centro = sequelize.define("centros", {
        idCentro: {
            type: Sequelize.INTEGER,
            primaryKey: true,

            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },

        codigo_Postal: {
            type: Sequelize.INTEGER
        },
        lat: {
            type: Sequelize.DOUBLE
        }, long: {
            type: Sequelize.DOUBLE
        },



    }, {
        timestamps: false,
    });
    Centro.associate = function (models) {
        Centro.hasMany(models.usuarios, {
            as: "fk_usu_Id_Centro",
            foreignKey: {
                name: "idCentro"
            }
        }),
        Centro.hasMany(models.health, {
            as: "centros",
            foreignKey: "idCentro"
        })
    };
    return Centro;
};