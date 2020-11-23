module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuarios", {
        idUsuarios: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Username: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING
        },
        Nombre:{
            type: Sequelize.STRING      
        },
        Apellidos:{
            type: Sequelize.STRING      
        },
        Rol:{
            type: Sequelize.ENUM('Admin','Profesor','Alumno')  
        },
        Id_Centro: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Cetro', // 'persons' refers to table name
                key: 'Id_Centro', // 'id' refers to column name in persons table
             }
        },
    
    }, { timestamps: false });

    return Usuario;
};