module.exports = (sequelize, Sequelize) => {
    const Health = sequelize.define("healths", {
        idHealths: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        masa_Grasa: {
            type: Sequelize.DOUBLE
        },
        masa_Viseral: {
            type: Sequelize.DOUBLE,
        },
      

      
    }, { timestamps: false });
    Health.associate = function(models) {
        // associations can be defined here
       
     
    };
        //  
    return Health;
};