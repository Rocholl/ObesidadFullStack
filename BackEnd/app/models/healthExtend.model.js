module.exports = (sequelize, Sequelize) => {
    const healthExtend = sequelize.define("healthExtend", {
        idHealths: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        masa_Grasa: {
            type: Sequelize.DOUBLE
        },
        masa_Viseral: {
            type: Sequelize.DOUBLE,
        },
        masa_Muscular: {
            type: Sequelize.DOUBLE,
        },
        altura: {
            type: Sequelize.DOUBLE,
        },
        peso: {
            type: Sequelize.DOUBLE,
        },
        edad: {
            type: Sequelize.DOUBLE,
        },

      

      
    }, { timestamps: false });
    healthExtend.associate = function(models) {
        // associations can be defined here
       
     
    };
        //  
    return healthExtend;
};