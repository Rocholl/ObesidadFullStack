'use strict';

module.exports = {
  // se ejecuta cuando hacemos la seed
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
     }], {});
    
  },
// se ejecuta cuando se deshace la siembre
  down: async (queryInterface, Sequelize) => {

    
     await queryInterface.bulkDelete('People', null, {});
    
  }
};
