module.exports = (sequelize, Sequelize) => {
    const Health = sequelize.define("healths", {
        id: {
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
        peso_Muscular: {
            type: Sequelize.DOUBLE,
        },
        masa_Muscular: {
            type: Sequelize.DOUBLE,
        },
        edad_Metabolica:{
            type: Sequelize.DOUBLE,
        },
        altura: {
            type: Sequelize.DOUBLE,
        },
        perimetro_Abdominal: {
            type: Sequelize.DOUBLE,
        },
        peso: {
            type: Sequelize.DOUBLE,
        },
        masa_Corporal:{
            type: Sequelize.DOUBLE,
        },
        peso_Oseo:{
            type: Sequelize.DOUBLE,
        },
        actividad_Fisica:{
            type: Sequelize.DOUBLE,
        },
     

      

      
    }, { timestamps: false });
    Health.associate = function(models) {
        Health.hasMany(models.healthExtend,{

            foreignKey: 'idHealth'
        })
       
     
    };
        //  
    return Health;
};