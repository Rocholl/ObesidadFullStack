module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
        idUsuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nombre:{
            type: Sequelize.STRING      
        },
        apellidos:{
            type: Sequelize.STRING      
        },
        rol:{
            type: Sequelize.ENUM('Admin','Profesor','Alumno')  
        },
        idCentro: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Cetro', // 'persons' refers to table name
                key: 'Id_Centro', // 'id' refers to column name in persons table
             }
        },
    
    }, { timestamps: false });
 
    return Usuario;
};