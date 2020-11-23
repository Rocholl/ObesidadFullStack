module.exports = (sequelize, Sequelize) => {
    const municipio = sequelize.define("municipio", {
        idMunicipio: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        isla: {
            type: Sequelize.ENUM('Las palmas')            
        }

      
    },  {
        tableName: 'municipio',
        timestamps: false
    });

    return municipio;
};