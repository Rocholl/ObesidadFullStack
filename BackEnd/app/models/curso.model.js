module.exports = (sequelize, Sequelize) => {
    const curso = sequelize.define("curso", {
        idCUrso: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Curso: {
            type: Sequelize.String
           
           
        },
        Letra: {
            type: Sequelize.String     
        }

      
    }, { timestamps: false });

    return curso;
};