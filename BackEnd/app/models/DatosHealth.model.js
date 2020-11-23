module.exports = (sequelize, Sequelize) => {
    const health = sequelize.define("health", {
        idHealth: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Masa_Grasa: {
            type: Sequelize.DOUBLE
        },
        Masa_Viseral: {
            type: Sequelize.DOUBLE,
        }

      
    }, { timestamps: false });

    return health;
};